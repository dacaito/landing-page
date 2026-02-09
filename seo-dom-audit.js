import { chromium } from "playwright";

const BASE_URL = (process.env.BASE_URL || "https://vexgen.ai").replace(/\/$/, "");
const BASE_HOSTNAME = new URL(BASE_URL).hostname;
const ENFORCE_VERCEL_REDIRECTS = BASE_HOSTNAME === "vexgen.ai";

const TIMEOUTS = {
  navMs: Number(process.env.NAV_TIMEOUT_MS || 15000),
  perUrlMs: Number(process.env.PER_URL_TIMEOUT_MS || 25000),
  requestMs: Number(process.env.REQUEST_TIMEOUT_MS || 12000),
};

function withTimeout(promise, ms, label) {
  let t;
  const timeout = new Promise((_, reject) => {
    t = setTimeout(() => reject(new Error(`Timeout after ${ms}ms (${label})`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(t));
}

const INDUSTRY_SLUGS = [
  "chemical",
  "plastics",
  "food-beverage",
  "cosmetics",
  "pharma",
  "logistics",
];

const REAL_PAGE_PATHS = [
  "/en",
  "/de",
  "/es",
  "/en/company",
  "/de/company",
  "/es/company",
  "/en/privacy",
  "/de/privacy",
  "/es/privacy",
  "/en/imprint",
  "/de/imprint",
  "/es/imprint",
  ...INDUSTRY_SLUGS.flatMap((slug) => [
    `/en/industries/${slug}`,
    `/de/industries/${slug}`,
    `/es/industries/${slug}`,
  ]),
];

const NOT_FOUND_PATHS = ["/en/does-not-exist", "/de/does-not-exist", "/es/does-not-exist"];

const TRAILING_SLASH_REDIRECT_PATHS = [
  "/en/company/",
  "/de/company/",
  "/es/company/",
  "/en/privacy/",
  "/de/privacy/",
  "/es/privacy/",
  "/en/imprint/",
  "/de/imprint/",
  "/es/imprint/",
  "/en/industries/pharma/",
  "/de/industries/pharma/",
  "/es/industries/pharma/",
];

function printSection(title) {
  process.stdout.write(`\n${"=".repeat(80)}\n${title}\n${"=".repeat(80)}\n`);
}

function printResultLine(ok, label) {
  console.log(`${ok ? "PASS" : "FAIL"} - ${label}`);
}

function dedupeAlternates(alts) {
  const seen = new Set();
  const out = [];
  for (const a of alts) {
    const key = `${a.hreflang} ${a.href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(a);
  }
  return out;
}

function assertEqual(actual, expected, label) {
  const ok = actual === expected;
  return { ok, label, details: ok ? null : `expected ${JSON.stringify(expected)} got ${JSON.stringify(actual)}` };
}

function assertTruthy(actual, label) {
  const ok = Boolean(actual);
  return { ok, label, details: ok ? null : `got ${JSON.stringify(actual)}` };
}

function assertIncludesAll(setOrArray, required, label) {
  const s = new Set(setOrArray);
  const missing = required.filter((x) => !s.has(x));
  const ok = missing.length === 0;
  return { ok, label, details: ok ? null : `missing: ${missing.join(", ")}` };
}

function safeJsonParse(value) {
  try {
    return { ok: true, value: JSON.parse(value) };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

function flattenJsonLd(doc) {
  if (!doc || typeof doc !== "object") return [];
  const graph = doc["@graph"];
  if (Array.isArray(graph)) return graph.filter(Boolean);
  return [doc];
}

function findOrganizationJsonLd(jsonLdDocs) {
  for (const d of jsonLdDocs) {
    const items = flattenJsonLd(d);
    for (const item of items) {
      if (!item || typeof item !== "object") continue;
      const t = item["@type"];
      if (t === "Organization" || t === "Corporation") return item;
    }
  }
  return null;
}

const EXPECTED_ORG_SAME_AS = [
  "https://www.linkedin.com/company/vexgen-ai/",
  "https://www.crunchbase.com/organization/vexgen-ai",
  "https://app.dealroom.co/companies/vexgen_ai",
  "https://www.wlw.ch/de/firma/vexgen-ai-22367771",
  "https://github.com/vexgen-ai",
];

function getLangFromUrl(url) {
  const pathname = new URL(url).pathname;
  if (pathname.startsWith("/de/") || pathname === "/de") return "de";
  if (pathname.startsWith("/es/") || pathname === "/es") return "es";
  return "en";
}

const NOT_FOUND_EXPECTED_H1 = {
  en: "404 — Page Not Found",
  de: "404 — Seite nicht gefunden",
  es: "404 — Página no encontrada",
};

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
page.setDefaultTimeout(TIMEOUTS.navMs);
page.setDefaultNavigationTimeout(TIMEOUTS.navMs);

async function extractSeoFromDom() {
  return await page.evaluate(() => {
    const canonicalNodes = Array.from(document.querySelectorAll('link[rel="canonical"]'));
    const canonicalHrefs = canonicalNodes
      .map((n) => n.getAttribute("href"))
      .filter(Boolean);

    const descNodes = Array.from(document.querySelectorAll('meta[name="description"]'));
    const descContents = descNodes
      .map((n) => n.getAttribute("content"))
      .filter(Boolean);

    const altNodes = Array.from(document.querySelectorAll('link[rel="alternate"]'));
    const alternates = altNodes
      .map((n) => ({
        hreflang: (n.getAttribute("hreflang") || n.getAttribute("hrefLang") || "")
          .trim()
          .toLowerCase(),
        href: (n.getAttribute("href") || "").trim(),
      }))
      .filter((x) => x.hreflang && x.href);

    const robotsMeta = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? null;
    const h1 = document.querySelector("h1")?.textContent?.trim() ?? null;
    const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      .map((n) => n.textContent || "")
      .map((s) => s.trim())
      .filter(Boolean);

    const og = (name) => document.querySelector(`meta[property="${name}"]`)?.getAttribute("content") ?? null;
    const tw = (name) => document.querySelector(`meta[name="${name}"]`)?.getAttribute("content") ?? null;

    const openGraph = {
      title: og("og:title"),
      description: og("og:description"),
      url: og("og:url"),
      type: og("og:type"),
      image: og("og:image"),
      siteName: og("og:site_name"),
      locale: og("og:locale"),
    };

    const twitter = {
      card: tw("twitter:card"),
      title: tw("twitter:title"),
      description: tw("twitter:description"),
      image: tw("twitter:image"),
    };

    return {
      title: document.title || "",
      h1,
      robotsMeta,
      jsonLdScripts,
      openGraph,
      twitter,
      canonicalCount: canonicalNodes.length,
      canonicalHrefs,
      metaDescriptionCount: descNodes.length,
      metaDescriptionContents: descContents,
      alternates,
    };
  });
}

const failures = [];

const REAL_PAGE_URLS = REAL_PAGE_PATHS.map((p) => `${BASE_URL}${p}`);
const NOT_FOUND_URLS = NOT_FOUND_PATHS.map((p) => `${BASE_URL}${p}`);

// Redirect normalization checks (Vercel-only; local dev server won't do these redirects)
printSection("Redirect normalization checks");
if (!ENFORCE_VERCEL_REDIRECTS) {
  printResultLine(true, `Skipping redirect checks (BASE_URL hostname is ${BASE_HOSTNAME})`);
} else {
  for (const p of TRAILING_SLASH_REDIRECT_PATHS) {
    const url = `${BASE_URL}${p}`;
    let res;
    try {
      res = await withTimeout(context.request.get(url, { maxRedirects: 0, timeout: TIMEOUTS.requestMs }), TIMEOUTS.requestMs + 2000, `request ${url}`);
      const status = res.status();
      const location = res.headers()["location"] || "";
      const expectedLocation = p.replace(/\/+$/, "");
      const checks = [
        assertTruthy([301, 308].includes(status), `${p} first hop is 301/308`),
        assertEqual(location, expectedLocation, `${p} Location header is "${expectedLocation}"`),
      ];
      for (const c of checks) {
        printResultLine(c.ok, c.label + (c.details ? ` (${c.details})` : ""));
        if (!c.ok) failures.push({ url, label: c.label, details: c.details });
      }
    } catch (e) {
      const msg = `redirect check failed: ${String(e)}`;
      printResultLine(false, `${p} (${msg})`);
      failures.push({ url, label: "redirect check failed", details: msg });
    }
  }
}

const seenTitleDescByLang = {
  en: new Map(),
  de: new Map(),
  es: new Map(),
};

for (const url of [...REAL_PAGE_URLS, ...NOT_FOUND_URLS]) {
  const isNotFound = NOT_FOUND_URLS.includes(url);
  const kind = isNotFound ? "NotFound" : "Real page";
  printSection(`URL: ${url} (${kind})`);

  let res;
  let status = null;
  let finalUrl = url;
  try {
    // Avoid `networkidle` for SPAs with long-polling/media in dev.
    res = await withTimeout(
      page.goto(url, { waitUntil: "domcontentloaded", timeout: TIMEOUTS.navMs }),
      TIMEOUTS.perUrlMs,
      `goto ${url}`,
    );
    status = res?.status() ?? null;
    finalUrl = page.url();
  } catch (e) {
    printResultLine(false, `Navigation failed (${String(e)})`);
    failures.push({ url, label: "Navigation failed", details: String(e) });
    continue;
  }

  // Give Helmet a short moment to flush head tags after route render.
  await page.waitForTimeout(150);

  const extracted = await extractSeoFromDom();
  const alternates = dedupeAlternates(extracted.alternates).sort((a, b) =>
    a.hreflang.localeCompare(b.hreflang),
  );

  console.log(`HTTP status: ${status}`);
  if (finalUrl !== url) console.log(`Final URL: ${finalUrl}`);
  console.log(`Title: ${extracted.title}`);
  console.log(`H1: ${extracted.h1 ?? "<none>"}`);

  console.log(`\nCanonical tags: ${extracted.canonicalCount}`);
  for (const href of extracted.canonicalHrefs) console.log(`- ${href}`);

  console.log(`\nMeta description tags: ${extracted.metaDescriptionCount}`);
  for (const content of extracted.metaDescriptionContents) console.log(`- ${content}`);

  console.log(`\nHreflang alternates: ${alternates.length}`);
  for (const a of alternates) console.log(`- ${a.hreflang}: ${a.href}`);

  if (isNotFound) {
    console.log(`\nRobots meta: ${extracted.robotsMeta ?? "<none>"}`);

    const lang = getLangFromUrl(url);
    const checks = [
      assertEqual(extracted.robotsMeta, "noindex, follow", 'robots meta content is "noindex, follow"'),
      assertEqual(extracted.h1, NOT_FOUND_EXPECTED_H1[lang], "H1 matches expected language copy"),
      assertEqual(extracted.title, NOT_FOUND_EXPECTED_H1[lang], "<title> matches NotFound headline (not home title)"),
      assertTruthy(extracted.title !== "", "NotFound <title> is present"),
    ];

    let urlOk = true;
    for (const c of checks) {
      printResultLine(c.ok, c.label + (c.details ? ` (${c.details})` : ""));
      if (!c.ok) {
        urlOk = false;
        failures.push({ url, label: c.label, details: c.details });
      }
    }

    if (urlOk) printResultLine(true, "NotFound URL checks");
  } else {
    const hreflangValues = alternates.map((a) => a.hreflang);
    const parsedDocs = extracted.jsonLdScripts.map((s) => safeJsonParse(s));
    const jsonLdParseErrors = parsedDocs.filter((p) => !p.ok).map((p) => p.error);
    const jsonLdDocs = parsedDocs.filter((p) => p.ok).map((p) => p.value);
    const org = findOrganizationJsonLd(jsonLdDocs);
    const sameAs = Array.isArray(org?.sameAs) ? org.sameAs : [];

    const canonicalHref = extracted.canonicalHrefs[0] || "";
    const metaDesc = extracted.metaDescriptionContents[0] || "";

    // Uniqueness: no duplicate title+description combos within same language for real pages.
    const lang = getLangFromUrl(url);
    const key = `${extracted.title}|||${metaDesc}`;
    const prev = seenTitleDescByLang[lang].get(key);
    if (prev) {
      failures.push({ url, label: "Duplicate title+description within language", details: `same as ${prev}` });
    } else {
      seenTitleDescByLang[lang].set(key, url);
    }

    const checks = [
      assertEqual(extracted.canonicalCount, 1, "exactly 1 canonical tag"),
      assertTruthy(extracted.canonicalHrefs[0], "canonical href present"),
      assertEqual(extracted.metaDescriptionCount, 1, "exactly 1 meta description tag"),
      assertTruthy(extracted.metaDescriptionContents[0], "meta description content present"),
      assertIncludesAll(hreflangValues, ["en", "de", "es", "x-default"], "hreflang includes en,de,es,x-default"),
      assertEqual(extracted.jsonLdScripts.length, 1, "exactly 1 JSON-LD script"),
      assertTruthy(!jsonLdParseErrors.length, `JSON-LD scripts parse without errors`),
      assertTruthy(Boolean(org), "Organization schema present"),
      assertIncludesAll(sameAs, EXPECTED_ORG_SAME_AS, "Organization sameAs includes required profiles"),
      assertTruthy(Boolean(extracted.openGraph?.title), "og:title present"),
      assertTruthy(Boolean(extracted.openGraph?.description), "og:description present"),
      assertTruthy(Boolean(extracted.openGraph?.url), "og:url present"),
      assertTruthy(Boolean(extracted.openGraph?.type), "og:type present"),
      assertTruthy(Boolean(extracted.openGraph?.image), "og:image present"),
      assertTruthy(Boolean(extracted.openGraph?.siteName), "og:site_name present"),
      assertTruthy(Boolean(extracted.openGraph?.locale), "og:locale present"),
      assertTruthy(Boolean(extracted.twitter?.card), "twitter:card present"),
      assertTruthy(Boolean(extracted.twitter?.title), "twitter:title present"),
      assertTruthy(Boolean(extracted.twitter?.description), "twitter:description present"),
      assertTruthy(Boolean(extracted.twitter?.image), "twitter:image present"),
      assertEqual(extracted.openGraph?.url, canonicalHref, "og:url matches canonical"),
      assertEqual(extracted.openGraph?.title, extracted.title, "og:title matches <title>"),
      assertEqual(extracted.openGraph?.description, metaDesc, "og:description matches meta description"),
      assertEqual(extracted.twitter?.title, extracted.title, "twitter:title matches <title>"),
      assertEqual(extracted.twitter?.description, metaDesc, "twitter:description matches meta description"),
    ];

    let urlOk = true;
    for (const c of checks) {
      printResultLine(c.ok, c.label + (c.details ? ` (${c.details})` : ""));
      if (!c.ok) {
        urlOk = false;
        failures.push({ url, label: c.label, details: c.details });
      }
    }

    if (urlOk) printResultLine(true, "Real page URL checks");
  }
}

await browser.close();

if (failures.length) {
  printSection("FAILURE SUMMARY");
  for (const f of failures) {
    console.log(`- ${f.url}: ${f.label}${f.details ? ` (${f.details})` : ""}`);
  }
  process.exitCode = 1;
} else {
  printSection("SUMMARY");
  console.log("All URLs passed.");
}
