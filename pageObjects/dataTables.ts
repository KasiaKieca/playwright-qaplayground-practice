import { expect, Page } from "@playwright/test";

export class DataTables {
  constructor(private readonly page: Page) {}

  async goToDataTablesPage() {
    await this.page.goto("/practice");
    await this.page
      .getByRole("link", {
        name: "Practice reading, sorting, and filtering table data",
      })
      .click();
    await expect(this.page).toHaveURL("/practice/data-table");
  }

  async verifyColumnHeader(index: number, expectedText: string) {
    const headers = this.page.getByRole("columnheader");
    await expect(headers.nth(index)).toHaveText(expectedText);
  }

  async countTotalNumberOfRows(expectedCount: number) {
    const rows = this.page.getByRole("row");
    const rowCount = await rows.count();
    console.log("Total number of rows in the data table:", rowCount);
    await expect(rowCount).toBe(expectedCount);
  }

  async findBookRowByAuthorName(rowSelector: string, cellSelector: string) {
    const firstRowAuthorCell = this.page
      .locator(rowSelector)
      .first()
      .locator(cellSelector)
      .nth(3);
    const authorName = await firstRowAuthorCell.innerText();
    console.log("Downloaded author name is:", authorName);
    const matchingRow = this.page
      .locator(rowSelector)
      .filter({ hasText: authorName });
    await expect(matchingRow).toBeVisible();
  }
}
