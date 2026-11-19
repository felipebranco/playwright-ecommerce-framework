import { test, expect } from '@playwright/test';

test('search returns matching products', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').fill('hammer');
  await page.locator('[data-test="search-submit"]').click();

  await expect(page.locator('[data-test="search_completed"]')).toBeVisible();
  await expect(page.locator('[data-test^="product-"]').first()).toBeVisible();
});