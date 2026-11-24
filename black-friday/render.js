// Gera os PNGs do banner a partir de banner.html
// Uso: node render.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2100, height: 3500 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'banner.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState('networkidle');
  const out = { desktop: 'banner-site-computador.png', mobile: 'banner-site-telemovel.png', insta: 'banner-instagram.png' };
  for (const [id, file] of Object.entries(out)) {
    await page.locator('#' + id).screenshot({ path: path.join(__dirname, file), type: 'png' });
  }
  await browser.close();
  console.log('ok:', Object.values(out).join(', '));
})();
