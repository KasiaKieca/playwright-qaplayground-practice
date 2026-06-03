import { expect, Page, selectors } from "@playwright/test";
import { Button } from "./components/buttons";
import * as InputFieldsComponent from "./components/inputFields";

export class InputFieldsPage {
  private button: Button;
  private inputFieldsComponent: InputFieldsComponent.InputFields;
  constructor(private readonly page: Page) {
    this.button = new Button(this.page);
    this.inputFieldsComponent = new InputFieldsComponent.InputFields(this.page);
  }

  async goToInputFieldsPage() {
    await this.page.goto("/practice");
    await this.page
      .getByRole("link", {
        name: "Practice Input Fields – Interact with different types of input fields",
      })
      .click();
  }
  async inputMovieName(selector: string, movieName: string) {
    await this.inputFieldsComponent.fillInputField(selector, movieName);
  }

  async appendTextAndPressTab(appendText: string, selector: string) {
    await this.page.getByTestId(selector).fill(appendText);
    await this.page.keyboard.press("Tab");
  }

  async verifityTextPresentInsideInput(
    selector: string,
    inputVerifyText: string,
  ) {
    await this.page.getByTestId(selector).click();
    await expect(this.page.getByTestId(selector)).toHaveValue(inputVerifyText);
  }
  async clearInputText(selector: string) {
    await this.page.getByTestId(selector).clear();
  }

  async checkEditFieldIsDisabled(selector: string = "input-disabled") {
    await expect(this.page.getByTestId(selector)).toBeDisabled();
  }

  async checkTextIsReadonly(selector: string) {
    await expect(this.page.getByTestId(selector)).toHaveAttribute("readonly");
  }
}
