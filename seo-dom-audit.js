import { chromium } from "playwright";

const URLS = [
  "https://vexgen.ai/en",
  "https://vexgen.ai/de",
  "https://vexgen.ai/es",
  "https://vexgen.ai/en/industries/pharma",
  "https://vexgen.ai/de/industries/pharma",
  "https://vexgen.ai/es/industries/pharma",
];

function printSection(title) {
  process.stdout.write(`\n${"=".repeat(80)}\n${title}\n${"=".repeat(80)}\n`);
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

const browser = await chromium.launch();
const page = await browser.newPage();

for (const url of URLS) {
  printSection(`URL: ${url}`);

  const res = await page.goto(url, { waitUntil: "networkidle" });
  const status = res?.status() ?? null;
  const finalUrl = page.url();

  const extracted = await page.evaluate(() => {
    const canonicalNodes = Array.from(
      document.querySelectorAll('link[rel="canonical"]'),
    );
    const canonicalHrefs = canonicalNodes
      .map((n) => n.getAttribute("href"))
      .filter(Boolean);

    const descNodes = Array.from(
      document.querySelectorAll('meta[name="description"]'),
    );
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

    return {
      title: document.title || "",
      canonicalCount: canonicalNodes.length,
      canonicalHrefs,
      metaDescriptionCount: descNodes.length,
      metaDescriptionContents: descContents,
      alternates,
    };
  });

  const alternates = dedupeAlternates(extracted.alternates).sort((a, b) =>
    a.hreflang.localeCompare(b.hreflang),
  );

  console.log(`HTTP status: ${status}`);
  if (finalUrl !== url) console.log(`Final URL: ${finalUrl}`);
  console.log(`Title: ${extracted.title}`);

  console.log(`\nCanonical tags: ${extracted.canonicalCount}`);
  if (extracted.canonicalHrefs.length) {
    for (const href of extracted.canonicalHrefs) console.log(`- ${href}`);
  }

  console.log(`\nMeta description tags: ${extracted.metaDescriptionCount}`);
  if (extracted.metaDescriptionContents.length) {
    for (const content of extracted.metaDescriptionContents) console.log(`- ${content}`);
  }

  console.log(`\nHreflang alternates: ${alternates.length}`);
  for (const a of alternates) {
    console.log(`- ${a.hreflang}: ${a.href}`);
  }
}

await browser.close();
