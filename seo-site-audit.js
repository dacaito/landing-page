import { chromium } from "playwright";
import fs from "node:fs";

const BASE_URL = (process.env.BASE_URL || "https://vexgen.ai").replace(/\/$/, "");
const SITEMAP_URL = process.env.SITEMAP_URL || `${BASE_URL}/sitemap.xml`;

const TIMEOUTS = {
  // Total runtime guard (ms)
  overallMs: Number(process.env.OVERALL_TIMEOUT_MS || 6 * 60 * 1000),
  // Per-URL processing budget (ms)
  perUrlMs: Number(process.env.PER_URL_TIMEOUT_MS || 25 * 1000),
  // Navigation timeout (ms)
  navMs: Number(process.env.NAV_TIMEOUT_MS || 15 * 1000),
  // Request timeout (ms) for alternate/hreflang checks
  requestMs: Number(process.env.REQUEST_TIMEOUT_MS || 12 * 1000),
};

function withTimeout(promise, ms, label) {
  let t;
  const timeout = new Promise((_, reject) => {
    t = setTimeout(() => reject(new Error(`Timeout after ${ms}ms (${label})`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(t));
}

function normalizeUrlForSet(u) {
  const url = new URL(u);
  url.hash = "";
  url.search = "";
  // normalize trailing slash (keep "/" only for origin root)
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
  }
  return url.toString();
}

function isInternalUrl(u) {
  try {
    const url = new URL(u);
    return url.origin === new URL(BASE_URL).origin;
  } catch {
    return false;
  }
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function mdEscape(text) {
  return String(text ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return { status: res.status, finalUrl: res.url, text };
}

function parseSitemapLocs(xml) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml))) locs.push(m[1].trim());
  return locs.filter(Boolean);
}

function extractRoutesFromAppTsx() {
  // Lightweight router extraction for dead-link detection.
  // This is best-effort: it looks for `<Route path="...">` or `path='/...'`.
  try {
    const src = fs.readFileSync(new URL("./client/src/App.tsx", import.meta.url), "utf8");
    const paths = [];
    const re = /<Route\s+path=(?:"([^"]+)"|'([^']+)')/g;
    let m;
    while ((m = re.exec(src))) paths.push((m[1] || m[2] || "").trim());
    return new Set(paths.filter(Boolean));
  } catch {
    return new Set();
  }
}

async function main() {
  // Hard stop watchdog (prevents “hang forever”)
  const watchdog = setTimeout(() => {
    console.error(`OVERALL TIMEOUT: exceeded ${TIMEOUTS.overallMs}ms, exiting`);
    process.exit(2);
  }, TIMEOUTS.overallMs);
  watchdog.unref?.();

  const sitemapFetch = await fetchText(SITEMAP_URL);
  if (sitemapFetch.status !== 200) {
    throw new Error(`Sitemap fetch failed: ${sitemapFetch.status} ${SITEMAP_URL}`);
  }

  const sitemapUrlsRaw = parseSitemapLocs(sitemapFetch.text);
  const sitemapUrls = uniq(sitemapUrlsRaw);
  const sitemapSet = new Set(sitemapUrls.map(normalizeUrlForSet));

  const EXTRA_PATHS = [
    "/",
    "/en",
    "/de",
    "/es",
    "/en/does-not-exist",
    "/de/does-not-exist",
    "/es/does-not-exist",
    // legacy (non-language) URLs that should redirect to /en equivalents
    "/company",
    "/privacy",
    "/imprint",
    "/company/",
    "/privacy/",
    "/imprint/",
    "/industries/pharma",
    "/industries/pharma/",
    // trailing-slash variants under language prefixes (should ideally redirect to non-slash route)
    "/en/",
    "/de/",
    "/es/",
    "/en/company/",
    "/de/company/",
    "/es/company/",
    "/en/privacy/",
    "/de/privacy/",
    "/es/privacy/",
    "/en/imprint/",
    "/de/imprint/",
    "/es/imprint/",
  ];
  const extraUrls = EXTRA_PATHS.map((p) => `${BASE_URL}${p}`);

  // URL list for JS-rendered inspection
  const allUrls = uniq([...sitemapUrls, ...extraUrls]);

  const routes = extractRoutesFromAppTsx(); // paths only
  const routerPathSet = new Set(Array.from(routes).map((p) => normalizeUrlForSet(`${BASE_URL}${p}`)));

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  page.setDefaultTimeout(TIMEOUTS.navMs);
  page.setDefaultNavigationTimeout(TIMEOUTS.navMs);

  const discoveredInternal = new Set();
  const perUrl = [];

  try {
    for (const url of allUrls) {
      const startedAt = Date.now();
      let status = null;
      let finalUrl = url;
      let data = null;
      let httpFirst = null;
      let httpFinal = null;
      let altChecks = [];
      let auditError = null;

      await withTimeout(
        (async () => {
          const res = await page.goto(url, { waitUntil: "networkidle", timeout: TIMEOUTS.navMs });
          status = res?.status() ?? null;
          finalUrl = page.url();

          // Best-effort: open interactive nav menus so their links are discoverable.
          try {
            const industriesTrigger = page.locator('[data-testid="link-industries"]').first();
            if (await industriesTrigger.count()) {
              await industriesTrigger.hover({ timeout: 2000 });
              await page.waitForTimeout(150);
            }
          } catch {
            // ignore
          }

          data = await page.evaluate(() => {
      const title = document.title || "";
      const canon = Array.from(document.querySelectorAll('link[rel="canonical"]'))
        .map((n) => n.getAttribute("href"))
        .filter(Boolean);
      const desc = Array.from(document.querySelectorAll('meta[name="description"]'))
        .map((n) => n.getAttribute("content"))
        .filter(Boolean);
      const robots = Array.from(document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[name="bingbot"]'))
        .map((n) => ({ name: n.getAttribute("name"), content: n.getAttribute("content") }));
      const h1s = Array.from(document.querySelectorAll("h1")).map((h) => (h.textContent || "").trim()).filter(Boolean);
      const alts = Array.from(document.querySelectorAll('link[rel="alternate"]'))
        .map((n) => ({ hreflang: (n.getAttribute("hreflang") || n.getAttribute("hrefLang") || "").toLowerCase(), href: n.getAttribute("href") }))
        .filter((x) => x.hreflang && x.href);

      const og = (name) => document.querySelector(`meta[property="${name}"]`)?.getAttribute("content") || null;
      const tw = (name) => document.querySelector(`meta[name="${name}"]`)?.getAttribute("content") || null;

      const ogTags = {
        "og:title": og("og:title"),
        "og:description": og("og:description"),
        "og:image": og("og:image"),
        "og:url": og("og:url"),
        "og:type": og("og:type"),
        "og:site_name": og("og:site_name"),
      };

      const twitterTags = {
        "twitter:card": tw("twitter:card"),
        "twitter:title": tw("twitter:title"),
        "twitter:description": tw("twitter:description"),
        "twitter:image": tw("twitter:image"),
      };

      const jsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .map((n) => (n.textContent || "").trim())
        .filter(Boolean);

      const internalLinks = Array.from(document.querySelectorAll("a[href]"))
        .map((a) => a.getAttribute("href") || "")
        .filter(Boolean);

      return {
        title,
        canonical: { count: canon.length, href: canon[0] || null, hrefs: canon },
        metaDescription: { count: desc.length, content: desc[0] || null, contents: desc },
        robots,
        hreflang: alts,
        h1: { count: h1s.length, texts: h1s },
        ogTags,
        twitterTags,
        jsonLdCount: jsonLd.length,
        internalLinks,
      };
          });

          // Non-DOM HTTP checks (first hop + final)
          try {
            const first = await context.request.get(url, { maxRedirects: 0, timeout: TIMEOUTS.requestMs });
            httpFirst = {
              status: first.status(),
              url: first.url(),
              location: first.headers()["location"] || null,
            };
            const fin = await context.request.get(url, { maxRedirects: 10, timeout: TIMEOUTS.requestMs });
            httpFinal = { status: fin.status(), url: fin.url() };
          } catch (e) {
            httpFirst = { status: null, url: null, location: null, error: String(e) };
            httpFinal = { status: null, url: null, error: String(e) };
          }

          // collect internal links
          for (const href of data.internalLinks) {
            try {
              const u = href.startsWith("http") ? new URL(href) : new URL(href, BASE_URL);
              if (u.origin !== new URL(BASE_URL).origin) continue;
              if (u.pathname.startsWith("/assets/")) continue;
              discoveredInternal.add(normalizeUrlForSet(u.toString()));
            } catch {
              // ignore invalid hrefs (mailto, tel, etc.)
            }
          }

          // Verify hreflang alternates return 200 (after redirects)
          altChecks = [];
          for (const alt of data.hreflang) {
            if (!alt.href) continue;
            try {
              const r = await context.request.get(alt.href, { maxRedirects: 10, timeout: TIMEOUTS.requestMs });
              altChecks.push({ hreflang: alt.hreflang, href: alt.href, status: r.status(), finalUrl: r.url() });
            } catch (e) {
              altChecks.push({
                hreflang: alt.hreflang,
                href: alt.href,
                status: null,
                finalUrl: null,
                error: String(e),
              });
            }
          }
        })(),
        TIMEOUTS.perUrlMs,
        `per-url ${url}`,
      ).catch((e) => {
        auditError = String(e);
      });

      perUrl.push({
        url,
        status,
        finalUrl,
        httpFirst,
        httpFinal,
        ...(data || {
          title: "",
          canonical: { count: 0, href: null, hrefs: [] },
          metaDescription: { count: 0, content: null, contents: [] },
          robots: [],
          hreflang: [],
          h1: { count: 0, texts: [] },
          ogTags: {},
          twitterTags: {},
          jsonLdCount: 0,
          internalLinks: [],
        }),
        hreflangChecks: altChecks,
        auditError,
        elapsedMs: Date.now() - startedAt,
      });
    }
  } finally {
    await browser.close().catch(() => {});
  }

  // Compare sitemap vs discovered
  const discovered = discoveredInternal;

  const orphans = Array.from(sitemapSet).filter((u) => !discovered.has(u));
  const inLinksNotInSitemap = Array.from(discovered).filter((u) => !sitemapSet.has(u));

  // Dead links = internal links that do not map to a known router path AND are not in sitemap.
  // (This is best-effort; also report trailing-slash mismatches separately.)
  const deadLinks = inLinksNotInSitemap.filter((u) => !routerPathSet.has(u));

  // Markdown report
  const issuesHigh = [];
  const issuesMedium = [];
  const issuesLow = [];

  const rows = perUrl.map((r) => {
    const problems = [];
    const finalForSeo = r.httpFinal?.url || r.finalUrl || r.url;
    const isRedirected = normalizeUrlForSet(finalForSeo) !== normalizeUrlForSet(r.url);

    const robotsMeta = (r.robots || []).find((m) => (m.name || "").toLowerCase() === "robots")?.content || null;
    const looks404 = (r.h1?.texts || []).some((t) => /^404\b/.test(t));
    const isNoindex = typeof robotsMeta === "string" && /noindex/i.test(robotsMeta);
    const isNotFoundLike = looks404 || isNoindex;

    const canonicalSelf = r.canonical?.href
      ? normalizeUrlForSet(r.canonical.href) === normalizeUrlForSet(finalForSeo)
      : false;

    // Real pages (indexable) must have exactly 1 meta description + canonical and self-referential canonical.
    // NotFound / noindex pages are allowed to omit these.
    if (!isNotFoundLike) {
      if (r.metaDescription?.count !== 1) problems.push("meta!=1");
      if (r.canonical?.count !== 1) problems.push("canon!=1");
      if (r.canonical?.count === 1 && !canonicalSelf) problems.push("canon!=self");
    } else {
      if (robotsMeta !== "noindex, follow") problems.push("noindex!=noindex, follow");
    }

    if (!isNotFoundLike) {
      const hreflangSet = new Set((r.hreflang || []).map((a) => a.hreflang));
      const requiredHrefs = ["en", "de", "es", "x-default"];
      const missing = requiredHrefs.filter((x) => !hreflangSet.has(x));
      if (missing.length) problems.push(`hreflang-miss:${missing.join(",")}`);

      const altNon200 = (r.hreflangChecks || []).filter((c) => c.status !== 200);
      if (altNon200.length) problems.push("hreflang-alt-non200");
    }

    // Hreflang URL mapping sanity: expect same base path under each language
    // (skip redirected + NotFound-like URLs; we only care on real canonical pages)
    if (!isRedirected && !isNotFoundLike) {
      const urlPath = new URL(r.url).pathname.replace(/\/+$/, "");
      const expectedBase = urlPath.replace(/^\/(en|de|es)(\/|$)/, "/");
      if (r.hreflang?.length) {
        for (const a of r.hreflang) {
          try {
            const ap = new URL(a.href).pathname.replace(/\/+$/, "");
            const apBase = ap.replace(/^\/(en|de|es)(\/|$)/, "/");
            if (apBase !== expectedBase) problems.push("hreflang-mismatch");
          } catch {
            problems.push("hreflang-bad-url");
          }
        }
      }
    }

    const ogMissing = Object.entries(r.ogTags || {}).filter(([, v]) => !v).map(([k]) => k);
    const twMissing = Object.entries(r.twitterTags || {}).filter(([, v]) => !v).map(([k]) => k);

    if (ogMissing.length) issuesMedium.push({ url: r.url, issue: `Missing OG tags: ${ogMissing.join(", ")}` });
    if (twMissing.length) issuesMedium.push({ url: r.url, issue: `Missing Twitter tags: ${twMissing.join(", ")}` });

    if (problems.length) issuesHigh.push({ url: r.url, issue: problems.join("; ") });

    // Legacy URL redirect expectation (non-language roots)
    const pathname = new URL(r.url).pathname;
    const isLegacyNonLang =
      pathname === "/" ||
      /^\/(company|privacy|imprint)$/.test(pathname) ||
      /^\/industries(\/|$)/.test(pathname);
    if (isLegacyNonLang) {
      const firstStatus = r.httpFirst?.status ?? null;
      if (pathname === "/") {
        if (firstStatus && ![301, 308].includes(firstStatus)) {
          issuesHigh.push({ url: r.url, issue: `Root should redirect (got ${firstStatus})` });
        }
      } else {
        if (firstStatus && ![301, 308].includes(firstStatus)) {
          issuesHigh.push({ url: r.url, issue: `Legacy URL should redirect (got ${firstStatus})` });
        }
      }
    }

    // Trailing-slash variants under language-prefixed routes.
    // Treat as Medium unless it falls through to SPA NotFound/noindex (then it's a High hygiene issue).
    if (/^\/(en|de|es)\/.+\/$/.test(pathname)) {
      const firstStatus = r.httpFirst?.status ?? null;
      if (firstStatus === 200) {
        if (isNotFoundLike) issuesHigh.push({ url: r.url, issue: "Trailing-slash variant falls through to SPA NotFound (should redirect)" });
        else issuesMedium.push({ url: r.url, issue: "Trailing-slash variant returns 200 (consider redirect to canonical)" });
      }
    }

    return {
      url: r.url,
      status: r.status,
      finalUrl: r.finalUrl,
      title: r.title,
      h1: (r.h1?.texts || [])[0] || "",
      metaDescription: r.metaDescription?.content || "",
      canonical: r.canonical?.href || "",
      robots: robotsMeta || "",
      hreflangCount: (r.hreflang || []).length,
      jsonLdCount: r.jsonLdCount ?? 0,
      problems: problems.join(", "),
    };
  });

  // Social tags "static across all pages" detection (OG/Twitter).
  // These tags are currently seeded in index.html and appear to be constant.
  // Flag as medium if multiple pages share identical og:title / twitter:title (weak share previews).
  const ogTitleToUrls = new Map();
  const twTitleToUrls = new Map();
  for (const r of perUrl.filter((x) => x.httpFinal?.status === 200)) {
    const ot = r.ogTags?.["og:title"] || "";
    const tt = r.twitterTags?.["twitter:title"] || "";
    if (ot) ogTitleToUrls.set(ot, [...(ogTitleToUrls.get(ot) || []), r.url]);
    if (tt) twTitleToUrls.set(tt, [...(twTitleToUrls.get(tt) || []), r.url]);
  }
  for (const [t, urls] of ogTitleToUrls.entries()) {
    if (urls.length >= 5) issuesMedium.push({ url: urls[0], issue: `OpenGraph title is static across many pages (${urls.length} pages share "${t}")` });
  }
  for (const [t, urls] of twTitleToUrls.entries()) {
    if (urls.length >= 5) issuesMedium.push({ url: urls[0], issue: `Twitter title is static across many pages (${urls.length} pages share "${t}")` });
  }

  // Detect duplicate titles/descriptions within same language
  const byLang = (u) => {
    const p = new URL(u).pathname;
    if (p.startsWith("/de/") || p === "/de") return "de";
    if (p.startsWith("/es/") || p === "/es") return "es";
    return "en";
  };

  const titleMap = new Map(); // key=lang|title -> urls
  const descMap = new Map();
  for (const r of rows) {
    const lang = byLang(r.url);
    const tkey = `${lang}|${r.title}`;
    const dkey = `${lang}|${r.metaDescription}`;
    titleMap.set(tkey, [...(titleMap.get(tkey) || []), r.url]);
    descMap.set(dkey, [...(descMap.get(dkey) || []), r.url]);
  }
  for (const [k, urls] of titleMap.entries()) {
    if (urls.length > 1) issuesMedium.push({ url: urls[0], issue: `Duplicate title within ${k.split("|")[0]}: ${urls.length} pages` });
  }
  for (const [k, urls] of descMap.entries()) {
    if (urls.length > 1) issuesMedium.push({ url: urls[0], issue: `Duplicate description within ${k.split("|")[0]}: ${urls.length} pages` });
  }

  const report = [];
  report.push(`# SEO Audit Report\n`);
  report.push(`- Base: \`${BASE_URL}\``);
  report.push(`- Sitemap: \`${SITEMAP_URL}\` (status ${sitemapFetch.status})`);
  report.push(`- Sitemap URLs: **${sitemapUrls.length}**\n`);

  report.push(`## URL Inventory Comparison\n`);
  report.push(`- **Discovered internal URLs (normalized)**: ${discovered.size}`);
  report.push(`- **Orphans** (in sitemap but not discovered via internal links): ${orphans.length}`);
  report.push(`- **Linked but not in sitemap**: ${inLinksNotInSitemap.length}`);
  report.push(`- **Dead links (linked, not in sitemap, not in router)**: ${deadLinks.length}\n`);

  if (orphans.length) {
    report.push(`### Orphans\n`);
    report.push(orphans.map((u) => `- ${u}`).join("\n") + "\n");
  }
  if (deadLinks.length) {
    report.push(`### Dead links (best-effort)\n`);
    report.push(deadLinks.map((u) => `- ${u}`).join("\n") + "\n");
  }

  report.push(`## Per-URL Checks (JS-rendered)\n`);
  report.push(
    [
      "| URL | HTTP first | Location | HTTP final | Final URL | Title | H1 | Meta desc count | Canon count | Canon self | Hreflang count | Robots | OG missing | Twitter missing |",
      "|---|---:|---|---:|---|---|---|---:|---:|---:|---:|---|---|---|",
    ].join("\n"),
  );

  for (const r of perUrl) {
    const canonSelf = r.canonical?.href ? normalizeUrlForSet(r.canonical.href) === normalizeUrlForSet(r.url) : false;
    const robotsMeta = (r.robots || []).find((m) => (m.name || "").toLowerCase() === "robots")?.content || "";
    const ogMissing = Object.entries(r.ogTags || {}).filter(([, v]) => !v).map(([k]) => k).join(", ");
    const twMissing = Object.entries(r.twitterTags || {}).filter(([, v]) => !v).map(([k]) => k).join(", ");
    const h1 = (r.h1?.texts || [])[0] || "";
    const httpFirstStatus = r.httpFirst?.status ?? "";
    const httpFirstLoc = r.httpFirst?.location ?? "";
    const httpFinalStatus = r.httpFinal?.status ?? "";
    report.push(
      `| ${mdEscape(r.url)} | ${httpFirstStatus} | ${mdEscape(httpFirstLoc)} | ${httpFinalStatus} | ${mdEscape(r.httpFinal?.url || r.finalUrl || "")} | ${mdEscape(r.title)} | ${mdEscape(h1)} | ${r.metaDescription?.count ?? 0} | ${r.canonical?.count ?? 0} | ${canonSelf ? "yes" : "no"} | ${(r.hreflang || []).length} | ${mdEscape(robotsMeta)} | ${mdEscape(ogMissing)} | ${mdEscape(twMissing)} |`,
    );
  }
  report.push("");

  report.push(`## Issues\n`);
  report.push(`### High\n`);
  report.push(issuesHigh.length ? issuesHigh.map((i) => `- ${i.url}: ${i.issue}`).join("\n") : "- None");
  report.push(`\n### Medium\n`);
  report.push(issuesMedium.length ? issuesMedium.map((i) => `- ${i.url}: ${i.issue}`).join("\n") : "- None");
  report.push(`\n### Low\n`);
  report.push(issuesLow.length ? issuesLow.map((i) => `- ${i.url}: ${i.issue}`).join("\n") : "- None");
  report.push("");

  const markdown = report.join("\n");
  const outPath = new URL("./SEO_AUDIT_REPORT.md", import.meta.url);
  fs.writeFileSync(outPath, markdown, "utf8");

  const jsonPath = new URL("./seo-audit-results.json", import.meta.url);
  fs.writeFileSync(jsonPath, JSON.stringify({ baseUrl: BASE_URL, sitemapUrl: SITEMAP_URL, sitemapUrls, discovered: Array.from(discovered), orphans, inLinksNotInSitemap, deadLinks, perUrl }, null, 2));

  console.log(`Wrote ${outPath.pathname}`);
  console.log(`Wrote ${jsonPath.pathname}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

