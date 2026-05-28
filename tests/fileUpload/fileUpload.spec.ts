import { test, expect } from '@playwright/test';
import { FileUpload } from '../../pageObjects/fileUpload'; 

// Scenario 1: Select a file to upload
test('select a file to upload', async ({ page }) => {
    const fileUpload = new FileUpload(page);
    await fileUpload.selectFile();
});