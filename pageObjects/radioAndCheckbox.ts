import { fi } from "@faker-js/faker";
import { expect, Page } from "@playwright/test";

export class RadioAndCheckbox {
  constructor(private readonly page: Page) {}

  async goToRadioAndCheckboxPage() {
    await this.page.goto("/practice");
    await this.page
      .getByRole("link", {
        name: "Practice Radio & Checkbox – Toggle radio buttons and checkboxes in different states",
      })
      .click();
    await expect(this.page).toHaveURL("/practice/radio-checkbox");
  }

  async verifyRadioButtonSelection(selector: string) {
    const radioButton = this.page.getByTestId(selector);
    await radioButton.click();
    await expect(radioButton).toBeChecked();
  }

  async verifySelectingAnotherRadioDeselectPreviousOne(
    firstSelector: string,
    secondSelector: string,
  ) {
    const firstRadio = this.page.getByTestId(firstSelector);
    const secondRadio = this.page.getByTestId(secondSelector);

    await firstRadio.click();
    await secondRadio.click();
    await expect(firstRadio).not.toBeChecked();
    await expect(secondRadio).toBeChecked();
  }

  async verifyOnlyOneRadioButtonCanBeSelectedAtATime(groupSelector: string) {
    const radioGroup = this.page.locator(groupSelector);
    const count = await radioGroup.count();

    for (let i = 0; i < count; i++) {
      const currentRadio = radioGroup.nth(i);
      await currentRadio.click();

      for (let j = 0; j < count; j++) {
        const radioToVerify = radioGroup.nth(j);

        if (i === j) {
          await expect(radioToVerify).toBeChecked();
        } else {
          await expect(radioToVerify).not.toBeChecked();
        }
      }
    }
  }
}
