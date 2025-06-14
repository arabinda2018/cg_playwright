import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });




test("TC_01: Validate checkout page",async({page})=>{

  await page.goto("https://www.google.com");
  // await page.locator("#APjFqb").fill("wipro",{timeout:20000});
  await page.fill("#APjFqb","wipro",{timeout:20000});
  await page.press("#APjFqb","Enter",{timeout:20000});
  await page.waitForTimeout(10000);

})