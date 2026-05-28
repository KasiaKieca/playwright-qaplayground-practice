import { test } from '@playwright/test';
import { Login } from '../../pageObjects/login'; 

// Login
test('login to the application', async ({ page }) => {
    const login = new Login(page);
    await login.login();
});