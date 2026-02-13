import fs from "node:fs/promises";

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toIsoDate(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function stripLocalePrefix(route, locales) {
  for (const loc of locales) {
    if (route === `/${loc}`) return "";
    if (route.startsWith(`/${loc}/`)) return route.slice(loc.length + 1); // remove `/${loc}`
  }
  return null;
}

function buildAbsoluteUrl(siteOrigin, route) {
  // route must be no-trailing-slash and start with '/'
  return `${siteOrigin}${route}`;
}

export function generateSitemapXml({ routes, locales, siteOrigin, lastmod }) {
  const date = lastmod ?? toIsoDate();
  const lines = [];
  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  lines.push(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`
  );

  for (const route of routes) {
    const suffix = stripLocalePrefix(route, locales);
    if (suffix == null) continue;

    const locUrl = buildAbsoluteUrl(siteOrigin, route);
    lines.push(`  <url>`);
    lines.push(`    <loc>${xmlEscape(locUrl)}</loc>`);

    for (const hreflang of locales) {
      const href = buildAbsoluteUrl(siteOrigin, `/${hreflang}${suffix}`);
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="${xmlEscape(
          hreflang
        )}" href="${xmlEscape(href)}" />`
      );
    }

    const xDefaultHref = buildAbsoluteUrl(siteOrigin, `/en${suffix}`);
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(
        xDefaultHref
      )}" />`
    );

    lines.push(`    <lastmod>${xmlEscape(date)}</lastmod>`);
    lines.push(`  </url>`);
  }

  lines.push(`</urlset>`);
  return lines.join("\n") + "\n";
}

export async function writeSitemapXml({ filePath, xml }) {
  await fs.mkdir(new URL(".", `file://${filePath}`).pathname, { recursive: true }).catch(() => {});
  await fs.writeFile(filePath, xml, "utf8");
}

