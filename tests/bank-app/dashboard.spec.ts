import { test } from '@playwright/test';
import { Dashboard } from '../../pageObjects/dashboard'; 
import { Login } from '../../pageObjects/login';
import { QucikActions } from '../../pageObjects/invalidLogin';

// Scenario 1: Skeleton Loading State
test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.login();
});

test('skeleton loading state appears on page', async ({ page }) => {
    const dashboard = new Dashboard(page);
    await dashboard.skeletonLoadingStateAppearsOnPage();
});
// Scenario 2: Quick Actions navigate to correct pages
test('quick actions navigate to correct pages', async ({ page }) => {
    const dashboard = new QucikActions(page);
    await dashboard.quickActionsNavigateToCorrectPages();
});