const { test, expect } = require('@playwright/test');

test('Negative username test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('incorrectUser');
    await page.getByLabel('Password').fill('Password123');
    await page.click('#submit');
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Your username is invalid!');
});
