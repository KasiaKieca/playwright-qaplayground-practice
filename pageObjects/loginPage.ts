import { expect, Page, selectors } from "@playwright/test";
import { Button } from "./components/buttons";
import { InputFields } from "./components/inputFields";

export class LoginPage {
  private button: Button;
  private inputFields: InputFields;

  constructor(private readonly page: Page) {
    this.button = new Button(this.page);
    this.inputFields = new InputFields(this.page);
  }

  async goToLoginPage() {
    await this.page.goto("https://qaplayground.com/bank");
    await expect(this.page).toHaveURL("https://qaplayground.com/bank");
  }

  async fillUserName(username: string) {
    await this.inputFields.fillInputField("username-input", username);
  }

  async fillPassword(password: string) {
    await this.page.getByTestId("password-input").fill(password);
    await expect(this.page.getByTestId("password-input")).toHaveValue(password);
  }

  async clickLoginButton() {
    await this.button.clickButton("[data-testid='login-button']");
  }

  async clickRememberMe() {
    await this.page.getByTestId("remember-checkbox").click();
    await expect(this.page.getByTestId("remember-checkbox")).toBeChecked();
  }

  async clickEyeIcon() {
    await this.page.getByTestId("toggle-password-btn").click();
  }
}
