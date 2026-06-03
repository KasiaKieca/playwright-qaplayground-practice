import { test } from "@playwright/test";
import { FileUploadPage } from "../../pageObjects/fileUpload";
import path from "path";

test.describe("File Upload Tests", () => {
  let fileUpload: FileUploadPage;

  test.beforeEach(async ({ page }) => {
    fileUpload = new FileUploadPage(page);
    await fileUpload.goToFileUploadPage();
  });

  // Scenario 1: Select a file to upload
  test("select a file to upload", async () => {
    // Definiujemy zmienną ze ścieżką do pliku
    const targetFilePath = path.join(process.cwd(), "tests/fixtures/plik.png");

    // Przekazujemy dokładnie: selector, zmienna, displaySelector
    await fileUpload.selectFile(
      "file-upload-input",
      targetFilePath,
      "file-path-display",
    );
  });
});
