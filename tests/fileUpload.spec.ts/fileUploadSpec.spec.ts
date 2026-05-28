import { test, expect } from '@playwright/test';
import { FileUploadPage } from '../../pageObjects/fileUpload'; 

// Scenario 1: Select a file to upload
test('select a file to upload', async ({ page }) => {
    const fileUpload = new FileUploadPage (page);
        await fileUpload.selectFile();
});