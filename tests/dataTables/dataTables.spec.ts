import { test, expect } from '@playwright/test';
import { DataTables } from '../../pageObjects/dataTables'; 

// Scenario 1: Verify All Column Headers
test('verify all column headers', async ({ page }) => {
    const dataTables = new DataTables (page);
        await dataTables.verifyAllColumn();
});
// Scenario 2: Count the total number of rows in the data table
test('count the total number of rows in the data table', async ({ page }) => {
    const dataTables = new DataTables (page);
    await dataTables.countTotalNumberOfRows();
});
// Scenario 3: Find a book row by author name using XPathor filter
test('find a book row by author name using XPathor filter', async ({ page }) => {
    const dataTables = new DataTables (page);
    await dataTables.findBookRowByAuthorName();
});