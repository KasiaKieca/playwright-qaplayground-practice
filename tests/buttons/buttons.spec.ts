import { test, expect } from "@playwright/test";
import { Buttons } from "../../pageObjects/buttons";

test.describe("Buttons Tests", () => {
  let buttons: Buttons;

  test.beforeEach(async ({ page }) => {
    buttons = new Buttons(page);
    await buttons.goToButtonsPage();
  });

  // Scenario 1: Navigate to Home Page
  test("navigate to home page", async () => {
    await buttons.clickToNavigate("btn-goto-home", "https://qaplayground.com");
  });
  // Scenario 2: Get Button X & Y Coordinates
  test("get button x & y coordinates", async () => {
    await buttons.getButtonCoordinates("btn-find-location", "Find Location");
  });
  // Scenario 3: Get Button Color
  test("get button color", async () => {
    await buttons.getButtonColor(
      "btn-find-color",
      "background-color",
      "rgb(147, 197, 253)",
    );
  });
  // Scenario 4: Get Button Font Size
  test("get button font size", async () => {
    await buttons.getButtonFontSize("btn-size", "font-size", "14px");
  });

  //  Scenario 5: Get Button Height & Width
  test("get button height & width", async () => {
    await buttons.getButtonHeightAndWidth("btn-disabled");
  });

  // Scenario 6: Click and Hold for 1.5 sec
  test("click and hold for 1.5 sec", async () => {
    await buttons.clickAndHold("btn-click-hold", "Click and Hold!");
  });
  // Scenario 7: Double Click Button
  test("double click button", async () => {
    await buttons.doubleClickButton("btn-double-click", "Double Click Me");
  });
  // Scenario 8: Right Click Button
  test("right click button", async () => {
    await buttons.rightClickButton("btn-right-click", "Right Click Me");
  });
  // Scenario 9: Verifity button is enabled when it should be
  test("verify button is enabled when it should be", async () => {
    await buttons.verifytyButtonIsEnabled(
      "btn-goto-home",
      "https://qaplayground.com/",
    );
  });
  // Scenario 10: Verifity button is responsive on diffrent screen sizes
  test("verify button is responsive on different screen sizes", async () => {
    await buttons.verifyButtonIsResponsive("btn-goto-home");
  });
  // Scenario 11: Verify button is accessible via keyboard
  test("verify button is accessible via keyboard", async () => {
    await buttons.verifyButonIsAccessible("https://qaplayground.com/");
  });
  // Scenario 12: Verify button hover state is visually distinct
  test("verify button hover state is visually distinct", async () => {
    await buttons.verifyButtonHover(
      "btn-click-hold",
      "background-color",
      "rgb(37, 99, 235)",
    );
  });
  // Scenario 13: Verifity button page loads without errors
  test("verify button page loads without errors", async () => {
    await buttons.verifyButtonPageLoadsWithoutErrors("/practice/buttons");
  });
});
