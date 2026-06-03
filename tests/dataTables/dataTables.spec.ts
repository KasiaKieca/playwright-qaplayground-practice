import { test } from "@playwright/test";
import { DataTables } from "../../pageObjects/dataTables";

test.describe("Data Tables Tests", () => {
  let dataTables: DataTables;

  test.beforeEach(async ({ page }) => {
    dataTables = new DataTables(page);
    await dataTables.goToDataTablesPage();
  });

  // Scenario 1: Verify All Column Headers
  test("verify all column headers", async () => {
    await dataTables.verifyColumnHeader(0, "Sr No.");
    await dataTables.verifyColumnHeader(1, "Book Name");
    await dataTables.verifyColumnHeader(2, "Book Genre");
    await dataTables.verifyColumnHeader(3, "Book Author");
    await dataTables.verifyColumnHeader(4, "Book ISBN");
    await dataTables.verifyColumnHeader(5, "Book Published");
  });

  // Scenario 2: Count the total number of rows in the data table
  test("count the total number of rows in the data table", async () => {
    await dataTables.countTotalNumberOfRows(7);
  });

  // Scenario 3: Find a book row by author name using XPathor filter
  test("find a book row by author name using XPathor filter", async () => {
    await dataTables.findBookRowByAuthorName("tbody tr", "td");
  });
});
