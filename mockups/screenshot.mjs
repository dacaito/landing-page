import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });

// Overview: full-page dashboard at 1440x900
const overviewPage = await ctx.newPage();
await overviewPage.setViewportSize({ width: 1440, height: 900 });
await overviewPage.goto(`file://${resolve(__dirname, 'dashboard-overview.html')}`);
await overviewPage.waitForTimeout(500);
await overviewPage.screenshot({
  path: resolve(__dirname, '..', 'attached_assets', 'dashboard-shipping-overview.png'),
  fullPage: true,
});
console.log('Saved dashboard-shipping-overview.png');

// Live feed: just the card element
const feedPage = await ctx.newPage();
await feedPage.setViewportSize({ width: 800, height: 900 });
await feedPage.goto(`file://${resolve(__dirname, 'dashboard-live-feed.html')}`);
await feedPage.waitForTimeout(500);
const card = feedPage.locator('.frame');
await card.screenshot({
  path: resolve(__dirname, '..', 'attached_assets', 'dashboard-live-verification-feed.png'),
});
console.log('Saved dashboard-live-verification-feed.png');

await browser.close();
