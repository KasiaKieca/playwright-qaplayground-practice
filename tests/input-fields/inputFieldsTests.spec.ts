import { test, expect } from '@playwright/test';
import { InputFields } from '../../pageObjects/inputFields';
// Scenario 1 Move Name Input

test('has title', async ({ page }) => {
    const inputFields = new InputFields (page);
    await inputFields.hasTitle();    

});
// Scenario 2 Append a text and press keyboard tab
test('append text and press keyboard tab', async ({ page }) => {
     const inputFields = new InputFields (page);
     await inputFields.appendTextAndPressTab();
});
// Scenario 3 Verify text present inside input field
test('verify text present inside input field', async ({ page }) => {
    const inputFields = new InputFields (page);
    await inputFields.verifityTextPresentInsideInput();
});
// Scenario 4 Clear the text
test('clear the text', async ({ page }) => {
    const inputFields = new InputFields (page);
    await inputFields.clearInputText();
});
// Scenario 5 Check edit field is disabled
test('check edit field is disabled', async ({ page }) => {
    const inputFields = new InputFields (page);
    await inputFields.checkEditFieldIsDisabled();
});
// Scenario 6 Check text is readonly
test('check text is readonly', async ({ page }) => {
    const inputFields = new InputFields (page);
    await inputFields.checkTextIsReadonly();
});