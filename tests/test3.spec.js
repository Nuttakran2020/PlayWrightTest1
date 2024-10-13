const { test, expect } = require('@playwright/test');

test('Negative password test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('incorrectPassword');
    await page.click('#submit');
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('รหัสผ่านของคุณไม่ถูกต้อง!');
});
