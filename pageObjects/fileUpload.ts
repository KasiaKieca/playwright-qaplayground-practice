import { expect, Page } from "@playwright/test";
import path from "path";

export class FileUploadPage {
  constructor(private readonly page: Page) {}

  async selectFile(
    selector: string,
    filePath: string,
    displaySelector: string,
  ) {
    console.log("File path:", filePath);
    const fileChooserPromise = this.page.waitForEvent("filechooser");
    await this.page.getByTestId(selector).click({ force: true });
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
    await expect(this.page.getByTestId(displaySelector)).toBeVisible({
      timeout: 10000,
    });
  }
}
