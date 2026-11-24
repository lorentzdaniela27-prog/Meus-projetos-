// Gera os PNGs do banner a partir de banner.html
// Uso: node render.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2100, height: 2300 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'banner.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.locator('#desktop').screenshot({ path: path.join(__dirname, 'banner-desktop.png') });
  await page.locator('#mobile').screenshot({ path: path.join(__dirname, 'banner-mobile.png') });
  await browser.close();
  console.log('ok: banner-desktop.png, banner-mobile.png');
})();
