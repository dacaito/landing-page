import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

import { discoverPublicRoutes } from "./discoverRoutes.mjs";
import { generateSitemapXml } from "./generateSitemap.mjs";

const REPO_ROOT = path.resolve(process.cwd());
const SITE_ORIGIN = "https://vexgen.ai";

const DIST_PUBLIC_DIR = path.join(REPO_ROOT, "dist", "public");
const DIST_SSR_DIR = path.join(REPO_ROOT, "dist", "ssr");

function runOrThrow(command, args, options = {}) {
  const res = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    ...options,
  });
  if (res.status !== 0) {
    throw new Error(`Command failed (${command} ${args.join(" ")}) with code ${res.status}`);
  }
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureWebBuild() {
  const indexPath = path.join(DIST_PUBLIC_DIR, "index.html");
  if (await exists(indexPath)) return;
  runOrThrow("npm", ["run", "build:web"], { cwd: REPO_ROOT });
}

async function ensureSsrBuild() {
  const entryCandidate = path.join(DIST_SSR_DIR, "entry-server.js");
  // Always rebuild SSR bundle to avoid stale output in CI/local.
  // (It is small and fast, and this keeps prerender deterministic.)

  // Build SSR bundle using the Vite project root at ./client
  runOrThrow(
    "npx",
    [
      "vite",
      "build",
      "--config",
      "../vite.config.ts",
      "--ssr",
      "src/entry-server.tsx",
      "--outDir",
      "../dist/ssr",
    ],
    { cwd: path.join(REPO_ROOT, "client") }
  );

  if (await exists(entryCandidate)) return entryCandidate;

  // Fallback: locate an output JS file containing 'entry-server'
  const files = await fs.readdir(DIST_SSR_DIR);
  const match = files.find((f) => f.includes("entry-server") && f.endsWith(".js"));
  if (!match) {
    throw new Error(`SSR build completed but could not find entry-server output in ${DIST_SSR_DIR}`);
  }
  return path.join(DIST_SSR_DIR, match);
}

function applyTemplate({ templateHtml, htmlAttributes, headHtml, appHtml }) {
  if (!templateHtml.includes("{{HTML_ATTRS}}")) {
    throw new Error("Template is missing {{HTML_ATTRS}} placeholder");
  }
  if (!templateHtml.includes("<!--ssr-head-->")) {
    throw new Error("Template is missing <!--ssr-head--> placeholder");
  }
  if (!templateHtml.includes("<!--ssr-outlet-->")) {
    throw new Error("Template is missing <!--ssr-outlet--> placeholder");
  }

  return templateHtml
    .replace("{{HTML_ATTRS}}", htmlAttributes || 'lang="en"')
    .replace("<!--ssr-head-->", headHtml || "")
    .replace("<!--ssr-outlet-->", appHtml || "");
}

async function writeFileEnsuringDir(filePath, contents) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, contents, "utf8");
}

async function main() {
  const { routes, locales } = await discoverPublicRoutes();

  // Always regenerate sitemap from discovered routes (single source of truth)
  const sitemapXml = generateSitemapXml({
    routes,
    locales,
    siteOrigin: SITE_ORIGIN,
  });

  // Ensure dist/public exists (Vite build output used as HTML template)
  await ensureWebBuild();

  // Write sitemap into both source public dir and dist output dir
  await writeFileEnsuringDir(
    path.join(REPO_ROOT, "client", "public", "sitemap.xml"),
    sitemapXml
  );
  await writeFileEnsuringDir(path.join(DIST_PUBLIC_DIR, "sitemap.xml"), sitemapXml);

  // Ensure SSR bundle exists, then import renderer
  const ssrEntry = await ensureSsrBuild();
  const ssrMod = await import(pathToFileURL(ssrEntry).href);
  if (typeof ssrMod.render !== "function") {
    throw new Error(`SSR entry does not export a 'render' function: ${ssrEntry}`);
  }

  const templatePath = path.join(DIST_PUBLIC_DIR, "index.html");
  const templateHtml = await fs.readFile(templatePath, "utf8");

  // Render each route into a flat .html file (no trailing slash URLs)
  for (const route of routes) {
    const { appHtml, headHtml, htmlAttributes } = await ssrMod.render(route);
    const fullHtml = applyTemplate({
      templateHtml,
      htmlAttributes,
      headHtml,
      appHtml,
    });

    const outPath = path.join(DIST_PUBLIC_DIR, `${route.slice(1)}.html`);
    await writeFileEnsuringDir(outPath, fullHtml);
  }

  // Replace dist/public/index.html with a valid SPA fallback (no placeholders)
  const fallbackHead = `<title>Vexgen AI - Align ERP with Reality</title>`;
  const fallbackIndex = applyTemplate({
    templateHtml,
    htmlAttributes: 'lang="en"',
    headHtml: fallbackHead,
    appHtml: "",
  });
  await fs.writeFile(templatePath, fallbackIndex, "utf8");

  // Optional debug artifact (route list)
  await writeFileEnsuringDir(
    path.join(REPO_ROOT, "dist", "prerender-routes.json"),
    JSON.stringify({ locales, routes }, null, 2) + "\n"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

