const { test, expect } = require('@playwright/test');

test('Qase Test', async ({ page }) => {
  await page.goto('https://qase.io/');
  const title = await page.title();
  expect(title).toContain('Qase');
});
