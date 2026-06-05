import { test, expect } from "../../fixtures/Page";
// Scenario 1 Move Name Input

test.describe("Input Fields Tests", () => {
  test.beforeEach(async ({ inputFields, page }) => {
    await inputFields.goToInputFieldsPage();
    await expect(page).toHaveURL("/practice/input-fields");
  });

  test("has title", async ({ inputFields, page }) => {
    await inputFields.inputMovieName("input-movie-name", "Inception");
    await expect(page.getByTestId("input-movie-name")).toHaveValue("Inception");
  });
  // Scenario 2 Append a text and press keyboard tab
  test("append text and press keyboard tab", async ({ inputFields, page }) => {
    await inputFields.appendTextAndPressTab("I am good", "input-append-text");
    await expect(page.getByTestId("input-append-text")).toHaveValue(
      "I am good",
    );
  });
  // Scenario 3 Verify text present inside input field
  test("verify text present inside input field", async ({
    inputFields,
    page,
  }) => {
    await inputFields.verifityTextPresentInsideInput(
      "input-verify-text",
      "QA PlayGround",
    );
    await expect(page.getByTestId("input-verify-text")).toHaveValue(
      "QA PlayGround",
    );
  });
  // Scenario 4 Clear the text
  test("clear the text", async ({ inputFields, page }) => {
    await inputFields.clearInputText("input-clear-text");
    await expect(page.getByTestId("input-clear-text")).toHaveValue("");
  });
  // Scenario 5 Check edit field is disabled
  test("check edit field is disabled", async ({ inputFields, page }) => {
    await expect(page).toHaveURL("/practice/input-fields");
    await inputFields.checkEditFieldIsDisabled("input-disabled");
  });
  // Scenario 6 Check text is readonly
  test("check text is readonly", async ({ inputFields, page }) => {
    await inputFields.checkTextIsReadonly("input-readonly");
  });
});
