import { test, expect } from '@playwright/test';
import { RadioAndCheckbox } from '../../pageObjects/radioAndCheckbox';

// Scenario 1 Verifity radio button is selected on click

test('verify radio button selection', async ({ page }) => {
    const radioAndCheckbox = new RadioAndCheckbox (page);
    await radioAndCheckbox.verifyRadioButtonSelection();    

});

// Scenario 2 Verify selecting another radio deselect the previous one

test ('verify selecting another radio deselect the previous one', async ({ page }) => {
    const radioAndCheckbox = new RadioAndCheckbox (page);
    await radioAndCheckbox.verifySelectingAnotherRadioDeselectPreviousOne();

});

// Scenario 3 Verifity only one radio button can be selected at a time

test ('verify only one radio button can be selected at a time', async ({ page }) => {
    const radioAndCheckbox = new RadioAndCheckbox (page);
    await radioAndCheckbox.verifyOnlyOneRadioButtonCanBeSelectedAtATime();

});