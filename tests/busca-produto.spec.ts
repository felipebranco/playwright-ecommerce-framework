import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01M7N0BWFM3G6GXX900TC3ZF6Y"]').click();
  await page.locator('[data-test="unit-price"]').click();
  await page.getByText('C', { exact: true }).click();
  await page.locator('[data-test="co2-rating-badge"]').getByText('B').click();
  await page.locator('[data-test="product-description"]').click();
  await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="proceed-1"]').click();
});