import fs from "node:fs/promises";
import path from "node:path";

const REPO_ROOT = path.resolve(process.cwd());

function normalizeRoute(route) {
  if (!route.startsWith("/")) route = `/${route}`;
  // enforce no trailing slash (except just "/")
  if (route.length > 1) route = route.replace(/\/+$/, "");
  return route;
}

function uniqSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a.localeCompare(b));
}

async function readFileUtf8(filePath) {
  return await fs.readFile(filePath, "utf8");
}

function sliceObjectLiteral(source, startIndex) {
  // starting at first "{" after startIndex, return substring until matching "}"
  const open = source.indexOf("{", startIndex);
  if (open === -1) throw new Error("Could not find '{' for object literal.");
  let depth = 0;
  for (let i = open; i < source.length; i++) {
    const ch = source[i];
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
    if (depth === 0) return source.slice(open, i + 1);
  }
  throw new Error("Unterminated object literal while slicing.");
}

function extractTopLevelKeysFromObjectLiteral(objLiteral) {
  // Extract keys at depth 1 of the object literal (ignore nested objects).
  const keys = [];
  let depth = 0;
  let inStr = null;
  for (let i = 0; i < objLiteral.length; i++) {
    const ch = objLiteral[i];
    if (inStr) {
      if (ch === "\\" && i + 1 < objLiteral.length) {
        i++;
        continue;
      }
      if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      inStr = ch;
      continue;
    }
    if (ch === "{") depth++;
    if (ch === "}") depth--;

    // At depth 1, look for patterns like:  en: {   OR  'en': {  OR  \"en\": {
    if (depth === 1) {
      const rest = objLiteral.slice(i);
      const m = rest.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*\{/);
      const mq = rest.match(/^\s*['"]([A-Za-z0-9_-]+)['"]\s*:\s*\{/);
      const key = (mq && mq[1]) || (m && m[1]);
      if (key) {
        keys.push(key);
      }
    }
  }
  return uniqSorted(keys);
}

export async function discoverLocalesFromTranslations() {
  const translationsPath = path.join(
    REPO_ROOT,
    "client",
    "src",
    "lib",
    "translations.ts"
  );
  const src = await readFileUtf8(translationsPath);
  // The translations object is formatted with top-level locale keys at 2-space indentation:
  //   en: { ... }, de: { ... }, es: { ... }
  // We intentionally anchor to exactly 2 spaces to avoid matching nested keys.
  const keys = [...src.matchAll(/^\s{2}([a-z]{2})\s*:\s*\{/gim)].map((m) => m[1]);
  const uniq = uniqSorted(keys);
  if (uniq.length < 2) {
    throw new Error(`Unexpected locale keys parsed from translations: ${JSON.stringify(uniq)}`);
  }
  return uniq;
}

export async function discoverBaseRouteSuffixesFromApp() {
  const appPath = path.join(REPO_ROOT, "client", "src", "App.tsx");
  const src = await readFileUtf8(appPath);
  const matches = [...src.matchAll(/<Route\s+[^>]*\bpath="([^"]+)"/g)];
  const paths = matches.map((m) => m[1]).filter(Boolean).map(normalizeRoute);

  // Convert full locale-prefixed paths to suffixes ('' for locale root).
  // Example: '/de/privacy' => '/privacy', '/en' => ''
  const suffixes = [];
  for (const p of paths) {
    const m = p.match(/^\/(en|de|es)(\/.*)?$/);
    if (!m) continue;
    const suffix = m[2] || "";
    suffixes.push(suffix);
  }
  // Ensure root route suffix exists
  suffixes.push("");
  return uniqSorted(suffixes);
}

export async function discoverIndustrySlugsFromFilesystem() {
  const dir = path.join(REPO_ROOT, "client", "src", "pages", "industries");
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
    .map((e) => e.name.replace(/\.tsx$/, ""))
    .filter((name) => name !== "IndustryTemplate")
    .filter((name) => name !== "not-found");
  return uniqSorted(slugs);
}

export async function discoverPublicRoutes() {
  const locales = await discoverLocalesFromTranslations();
  const suffixes = await discoverBaseRouteSuffixesFromApp();
  const industrySlugs = await discoverIndustrySlugsFromFilesystem();

  const suffixSet = new Set(suffixes);
  // Ensure all industry pages exist as suffixes.
  for (const slug of industrySlugs) {
    suffixSet.add(`/industries/${slug}`);
  }

  const routes = [];
  for (const locale of locales) {
    for (const suffix of suffixSet) {
      const r = normalizeRoute(`/${locale}${suffix}`);
      routes.push(r);
    }
  }

  return {
    locales,
    routeSuffixes: uniqSorted([...suffixSet]),
    industrySlugs,
    routes: uniqSorted(routes),
  };
}

