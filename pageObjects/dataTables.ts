import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class DataTables {
    constructor(private readonly page: Page){}
    
    async verifyAllColumn() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice reading, sorting, and filtering table data'}).click();
        await expect(this.page).toHaveURL('/practice/data-table');
        const headers = this.page.getByRole('columnheader');
        await expect(headers.nth(0)).toHaveText('Sr No.');
        await expect(headers.nth(1)).toHaveText('Book Name');
        await expect(headers.nth(2)).toHaveText('Book Genre');
        await expect(headers.nth(3)).toHaveText('Book Author');
        await expect(headers.nth(4)).toHaveText('Book ISBN');
        await expect(headers.nth(5)).toHaveText('Book Published');
    
    }

    async countTotalNumberOfRows() {
    await this.page.goto('/practice');
    await this.page.getByRole('link', { name: 'Practice reading, sorting, and filtering table data' }).click();
    await expect(this.page).toHaveURL('/practice/data-table');
    const rows = this.page.getByRole('row');
    const rowCount = await rows.count();
    console.log('Total number of rows in the data table:', rowCount);
    await expect(rowCount).toBe(7); 
    }

    async findBookRowByAuthorName() {
    await this.page.goto('/practice');
    await this.page.getByRole('link', { name: 'Practice reading, sorting, and filtering table data' }).click();
    await expect(this.page).toHaveURL('/practice/data-table');
    const firstRowAuthorCell = this.page.locator('tbody tr').first().locator('td').nth(3);
    const authorName = await firstRowAuthorCell.innerText();
    console.log('Pobrany losowy autor to:', authorName);
    const matchingRow = this.page.locator('tbody tr').filter({ hasText: authorName });
    await expect(matchingRow).toBeVisible();
    }
}