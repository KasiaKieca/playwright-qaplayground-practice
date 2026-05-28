import { expect, Page } from "@playwright/test";
import path from "path";

export class FileUploadPage {
    constructor(private readonly page: Page){}

    async selectFile() {
        await this.page.goto('/practice/file-upload');
        const filePath = path.join(process.cwd(), 'tests/fixtures/plik.png');
        console.log('File path:', filePath);
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.getByTestId('file-upload-input').click({ force: true });
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath);
        await expect(this.page.getByTestId('file-path-display')).toBeVisible({ timeout: 10000 });
    }
}