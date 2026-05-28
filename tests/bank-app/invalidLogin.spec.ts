import { test } from '@playwright/test';
import { InvalidLoginPage } from '../../pageObjects/invalidLogin';
// Scenario 1 Invalid Login
test('invalid login', async ({ page }) => {
    const invalidLoginPage = new InvalidLoginPage(page);
    await invalidLoginPage.invalidLogin();
});