/**
 * Minimal analytics verification (Playwright).
 *
 * Usage:
 *   BASE_URL=https://vexgen.ai node umami-analytics-test.mjs
 *
 * Notes:
 * - Validates our provider-agnostic event buffer: window.__vexgenEvents
 * - Does not require Umami dashboard access.
 * - Checks no first-party cookies are set for vexgen.ai (third-party cookies may exist).
 */

import { chromium } from "playwright";

const BASE_URL = process.env.BASE_URL || "https://vexgen.ai";
const TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 60_000);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function pickLast(arr, predicate) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) return arr[i];
  }
  return null;
}

async function getEvents(page) {
  return await page.evaluate(() => window.__vexgenEvents || []);
}

async function resetEvents(page) {
  await page.evaluate(() => {
    window.__vexgenEvents = [];
  });
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const failures = [];
  const check = async (label, fn) => {
    try {
      await fn();
      console.log(`PASS: ${label}`);
    } catch (e) {
      failures.push({ label, error: String(e && e.message ? e.message : e) });
      console.log(`FAIL: ${label}\n  ${String(e && e.message ? e.message : e)}`);
    }
  };

  try {
    await page.goto(`${BASE_URL}/en`, { waitUntil: "domcontentloaded", timeout: TIMEOUT_MS });
    await page.getByTestId("link-how-it-works").waitFor({ timeout: TIMEOUT_MS });

    await check("No first-party cookies for vexgen.ai after /en load", async () => {
      const jar = await context.cookies();
      const firstParty = jar.filter((c) => (c.domain || "").includes("vexgen.ai"));
      const docCookie = await page.evaluate(() => document.cookie);
      assert(docCookie === "", `Expected document.cookie empty, got ${JSON.stringify(docCookie)}`);
      assert(firstParty.length === 0, `Expected 0 vexgen.ai cookies, got ${firstParty.length}`);
    });

    await check("Anchor nav click emits ONLY nav_click(kind=anchor), no pageview", async () => {
      await resetEvents(page);

      // Anchor click (in-page scroll target)
      await page.getByTestId("link-how-it-works").click({ timeout: TIMEOUT_MS });
      await page.waitForTimeout(250);

      const events = await getEvents(page);
      const nav = pickLast(events, (e) => e && e.name === "nav_click");
      const pv = pickLast(events, (e) => e && e.name === "pageview");

      assert(!!nav, "Expected a nav_click event");
      assert(nav.payload && nav.payload.kind === "anchor", `Expected kind=anchor, got ${nav.payload && nav.payload.kind}`);
      assert(
        nav.payload && String(nav.payload.hash || "").startsWith("#"),
        `Expected hash '#...', got ${String(nav.payload && nav.payload.hash)}`
      );
      assert(!pv, "Expected NO pageview for anchor click");
    });

    await check("Industries route click emits nav_click(kind=route, href) then pageview", async () => {
      await resetEvents(page);

      // Open industries dropdown and click a real route link.
      await page.getByTestId("link-industries").hover({ timeout: TIMEOUT_MS });
      const plasticsHref = "/en/industries/plastics";
      await page.locator(`a[href='${plasticsHref}']`).first().click({ timeout: TIMEOUT_MS });
      await page.waitForURL(`**${plasticsHref}`, { timeout: TIMEOUT_MS });
      await page.waitForTimeout(500);

      const events = await getEvents(page);
      const nav = pickLast(events, (e) => e && e.name === "nav_click" && e.payload && e.payload.kind === "route");
      const pv = pickLast(events, (e) => e && e.name === "pageview");

      assert(!!nav, "Expected a nav_click(kind=route) event");
      assert(nav.payload && nav.payload.href === plasticsHref, `Expected href=${plasticsHref}, got ${String(nav.payload && nav.payload.href)}`);
      assert(!!pv, "Expected a pageview event after route navigation");
    });

    await check("Language switch emits language_switch(from,to) then pageview", async () => {
      await resetEvents(page);

      // Switch to DE via language dropdown.
      await page.getByLabel("Select language").click({ timeout: TIMEOUT_MS });
      await page.getByText("Deutsch", { exact: true }).click({ timeout: TIMEOUT_MS });
      await page.waitForTimeout(500);

      const events = await getEvents(page);
      const ls = pickLast(events, (e) => e && e.name === "language_switch");
      const pv = pickLast(events, (e) => e && e.name === "pageview");
      assert(!!ls, "Expected a language_switch event");
      assert(ls.payload && ls.payload.from && ls.payload.to, "Expected language_switch payload with from/to");
      assert(!!pv, "Expected a pageview after language navigation");
    });

    if (failures.length) {
      console.log("\nFailures:");
      for (const f of failures) console.log(`- ${f.label}: ${f.error}`);
      process.exitCode = 1;
    } else {
      console.log("\nAll checks passed.");
    }
  } finally {
    await browser.close();
  }
}

// Hard overall timeout to prevent hangs (and do not keep event loop alive).
let didFinish = false;
const timer = setTimeout(() => {
  if (didFinish) return;
  // eslint-disable-next-line no-console
  console.error("Overall timeout");
  process.exitCode = 1;
  // Force exit: Playwright can keep handles open when a test hangs.
  process.exit(1);
}, TIMEOUT_MS * 2);

try {
  await main();
  didFinish = true;
  clearTimeout(timer);
} catch (e) {
  didFinish = true;
  clearTimeout(timer);
  // eslint-disable-next-line no-console
  console.error(String(e && e.message ? e.message : e));
  process.exitCode = 1;
}

