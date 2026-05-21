import { test, expect } from '@playwright/test';
import { Buttons } from '../../pageObjects/buttons';
// Scenario 1: Navigate to Home Page
test('navigate to home page', async ({ page }) => {
   const buttons = new Buttons (page);
    await buttons.openButtonsPage(); 
});
// Scenario 2: Get Button X & Y Coordinates
test('get button x & y coordinates', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.getButtonCoordinates();

});
// Scenario 3: Get Button Color
test ('get button color', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.getButtonColor();

});
// Scenario 4: Get Button Font Size
test ('get button font size', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.getButtonFontSize();
});

//  Scenario 5: Get Button Height & Width
test ('get button height & width', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.getButtonHeightAndWidth();
});

// Scenario 6: Click and Hold for 1.5 sec
test('click and hold for 1.5 sec', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.clickAndHold();
});
// Scenario 7: Double Click Button
test('double click button', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.doubleClickButton();
});
// Scenario 8: Right Click Button
test('right click button', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.rightClickButton();
});
// Scenario 9: Verifity button is enabled when it should be
test('verify button is enabled when it should be', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.verifytyButtonIsEnabled();

});// Scenario 10: Verifity button is responsive on diffrent screen sizes
test('verify button is responsive on different screen sizes', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.verifyButtonIsResponsive();
});
// Scenario 11: Verify button is accessible via keyboard
test('verify button is accessible via keyboard', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.verifyButonIsAccessible();
});
// Scenario 12: Verifity buton hover state is visually distinct
test('verify button hover state is visually distinct', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.verifyButtonHover();
});
// Scenario 13: Verifity button page loads without errors
test('verify button page loads without errors', async ({ page }) => {
    const buttons = new Buttons (page);
    await buttons.verifyButtonPageLoadsWithoutErrors();
});