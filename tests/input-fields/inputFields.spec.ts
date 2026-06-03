import { test, expect } from "@playwright/test";
import { InputFieldsPage } from "../../pageObjects/inputFieldsPage";
// Scenario 1 Move Name Input

test("has title", async ({ page }) => {
  const inputFields = new InputFieldsPage(page);
  await inputFields.goToInputFieldsPage();
  await expect(page).toHaveURL("/practice/input-fields");
  await inputFields.inputMovieName("input-movie-name", "Inception");
  await expect(page.getByTestId("input-movie-name")).toHaveValue("Inception");
});
// Scenario 2 Append a text and press keyboard tab
test("append text and press keyboard tab", async ({ page }) => {
  const inputFields = new InputFieldsPage(page);
  await inputFields.goToInputFieldsPage();
  await expect(page).toHaveURL("/practice/input-fields");
  await inputFields.appendTextAndPressTab("I am good", "input-append-text");
  await expect(page.getByTestId("input-append-text")).toHaveValue("I am good");
});
// Scenario 3 Verify text present inside input field
test("verify text present inside input field", async ({ page }) => {
  const inputFields = new InputFieldsPage(page);
  await inputFields.goToInputFieldsPage();
  await expect(page).toHaveURL("/practice/input-fields");
  await inputFields.verifyTextPresentInsideInput(
    "input-verify-text",
    "QA PlayGround",
  );
  await expect(page.getByTestId("input-verify-text")).toHaveValue(
    "QA PlayGround",
  );
});
// Scenario 4 Clear the text
test("clear the text", async ({ page }) => {
  const inputFields = new InputFieldsPage(page);
  await inputFields.goToInputFieldsPage();
  await expect(page).toHaveURL("/practice/input-fields");
  await inputFields.clearInputText("input-clear-text");
  await expect(page.getByTestId("input-clear-text")).toHaveValue("");
});
// Scenario 5 Check edit field is disabled
test("check edit field is disabled", async ({ page }) => {
  const inputFields = new InputFieldsPage(page);
  await inputFields.goToInputFieldsPage();
  await expect(page).toHaveURL("/practice/input-fields");
  await inputFields.checkEditFieldIsDisabled("input-disabled");
});
// Scenario 6 Check text is readonly
test("check text is readonly", async ({ page }) => {
  const inputFields = new InputFieldsPage(page);
  await inputFields.goToInputFieldsPage();
  await expect(page).toHaveURL("/practice/input-fields");
  await inputFields.checkTextIsReadonly("input-readonly");
});
