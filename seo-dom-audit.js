import { chromium } from "playwright";

const REAL_PAGE_URLS = [
  "https://vexgen.ai/en",
  "https://vexgen.ai/de",
  "https://vexgen.ai/es",
  "https://vexgen.ai/en/industries/pharma",
  "https://vexgen.ai/de/industries/pharma",
  "https://vexgen.ai/es/industries/pharma",
];

const NOT_FOUND_URLS = [
  "https://vexgen.ai/en/does-not-exist",
  "https://vexgen.ai/de/does-not-exist",
  "https://vexgen.ai/es/does-not-exist",
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

function getLangFromUrl(url) {
  if (url.includes("://vexgen.ai/de/")) return "de";
  if (url.includes("://vexgen.ai/es/")) return "es";
  return "en";
}

const NOT_FOUND_EXPECTED_H1 = {
  en: "404 — Page Not Found",
  de: "404 — Seite nicht gefunden",
  es: "404 — Página no encontrada",
};

const browser = await chromium.launch();
const page = await browser.newPage();

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

    return {
      title: document.title || "",
      h1,
      robotsMeta,
      canonicalCount: canonicalNodes.length,
      canonicalHrefs,
      metaDescriptionCount: descNodes.length,
      metaDescriptionContents: descContents,
      alternates,
    };
  });
}

const failures = [];

for (const url of [...REAL_PAGE_URLS, ...NOT_FOUND_URLS]) {
  const isNotFound = NOT_FOUND_URLS.includes(url);
  const kind = isNotFound ? "NotFound" : "Real page";
  printSection(`URL: ${url} (${kind})`);

  const res = await page.goto(url, { waitUntil: "networkidle" });
  const status = res?.status() ?? null;
  const finalUrl = page.url();

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
    const checks = [
      assertEqual(extracted.canonicalCount, 1, "exactly 1 canonical tag"),
      assertTruthy(extracted.canonicalHrefs[0], "canonical href present"),
      assertEqual(extracted.metaDescriptionCount, 1, "exactly 1 meta description tag"),
      assertTruthy(extracted.metaDescriptionContents[0], "meta description content present"),
      assertIncludesAll(hreflangValues, ["en", "de", "es", "x-default"], "hreflang includes en,de,es,x-default"),
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
