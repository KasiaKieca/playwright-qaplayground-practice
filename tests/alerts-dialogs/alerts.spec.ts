import { test, expect } from '@playwright/test';

// Scenario 1: Simple Alert
test('simple alert', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link', { name: 'Handle browser alerts, confirms, and prompt dialogs' }).click();
    await expect(page).toHaveURL('/practice/alerts-dialogs');
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Welcome to QA PlayGround!');
        await dialog.accept();
    });
    await page.getByTestId('btn-simple-alert').click();
});

// Scenario 2: Confirm Alert
test('confirm alert', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link', { name: 'Handle browser alerts, confirms, and prompt dialogs' }).click();
    await expect(page).toHaveURL('/practice/alerts-dialogs');
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Do you know QA Playground?');
        await dialog.accept();
    });
    await page.getByTestId('btn-confirm-alert').click();
    await expect(page.getByTestId('result-confirm')).toHaveText('Result: true');
});