import { test, expect } from "../../fixtures/Page";
import { RadioAndCheckbox } from "../../pageObjects/radioAndCheckbox";

test.describe("Radio and Checkbox Tests", () => {
  test.beforeEach(async ({ radioAndCheckbox }) => {
    await radioAndCheckbox.goToRadioAndCheckboxPage();
  });

  // Scenario 1 Verifity radio button is selected on click

  test("verify radio button selection", async ({ radioAndCheckbox }) => {
    await radioAndCheckbox.verifyRadioButtonSelection("radio-yes-1");
  });

  // Scenario 2 Verify selecting another radio deselect the previous one

  test("verify selecting another radio deselect the previous one", async ({
    radioAndCheckbox,
  }) => {
    await radioAndCheckbox.verifySelectingAnotherRadioDeselectPreviousOne(
      "radio-yes-1",
      "radio-no-1",
    );
  });

  // Scenario 3 Verifity only one radio button can be selected at a time

  test("verify only one radio button can be selected at a time", async ({
    radioAndCheckbox,
  }) => {
    await radioAndCheckbox.verifyOnlyOneRadioButtonCanBeSelectedAtATime(
      'input[name="model-2"]',
    );
  });
});
