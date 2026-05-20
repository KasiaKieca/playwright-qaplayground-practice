import { test, expect } from '@playwright/test';
// Scenario 1: Verify All Column Headers
test('verify all column headers', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice reading, sorting, and filtering table data'}).click();
    await expect(page).toHaveURL('/practice/data-table');
    const headers = page.getByRole('columnheader');
    await expect(headers.nth(0)).toHaveText('Sr No.');
    await expect(headers.nth(1)).toHaveText('Book Name');
    await expect(headers.nth(2)).toHaveText('Book Genre');
    await expect(headers.nth(3)).toHaveText('Book Author');
    await expect(headers.nth(4)).toHaveText('Book ISBN');
    await expect(headers.nth(5)).toHaveText('Book Published');
});
// Scenario 2: Count the total number of rows in the data table
test('count the total number of rows in the data table', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice reading, sorting, and filtering table data'}).click();
    await expect(page).toHaveURL('/practice/data-table');
    const rows = page.getByRole('row');
    const rowCount = await rows.count();
    console.log('Total number of rows in the data table:', rowCount);
    await expect(rowCount).toBe(7);
});
// Find a book row by author name using XPathor filter
test('find a book row by author name using XPathor filter', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice reading, sorting, and filtering table data'}).click();
    await expect(page).toHaveURL('/practice/data-table');
    const firstRowAuthorCell = page.locator('tbody tr').first().locator('td').nth(3);
    const authorName = await firstRowAuthorCell.innerText();
    console.log('Pobrany losowy autor to:', authorName);
    const matchingRow = page.locator('tbody tr').filter({ hasText: authorName });
    await expect(matchingRow).toBeVisible();
});