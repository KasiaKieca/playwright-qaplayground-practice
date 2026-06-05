import { expect, Page } from "@playwright/test";

export class Forms {
  constructor(private readonly page: Page) {}

  async goToFormsPage() {
    await this.page.goto("/practice");
    await this.page
      .getByRole("link", {
        name: " Fill and submit forms with validation scenarios",
      })
      .click();
    await expect(this.page).toHaveURL("/practice/forms");
  }

  async fillFirstName(selector: string, firstName: string) {
    await this.page.getByTestId(selector).fill(firstName);
    await expect(this.page.getByTestId("input-first-name")).toHaveValue(
      firstName,
    );
  }

  async fillLastName(selector: string, lastName: string) {
    await this.page.getByTestId(selector).fill(lastName);
    await expect(this.page.getByTestId("input-last-name")).toHaveValue(
      lastName,
    );
  }

  // 💡 Poprawione: Usunięte "1" z nazw oraz przekazane wymagane selektory do metod fill
  async firstAndLastName(firstName: string, lastName: string) {
    await this.fillFirstName("input-first-name", firstName);
    await this.fillLastName("input-last-name", lastName);
  }

  async fillEmail(email: string) {
    await this.page.getByTestId("input-email").fill(email);
    await expect(this.page.getByTestId("input-email")).toHaveValue(email);
  }

  async fillDateOfBirth(dateOfBirth: string) {
    await this.page.getByTestId("input-dob").fill(dateOfBirth);
    await expect(this.page.getByTestId("input-dob")).toHaveValue(dateOfBirth);
  }

  async selectGenderMale() {
    await this.page.getByTestId("radio-gender-male").check();
  }

  async selectCountry(country: string) {
    await this.page.getByTestId("select-country").click();
    await this.page.getByRole("option", { name: country }).click();
    await expect(this.page.getByTestId("select-country")).toContainText(
      country,
    );
  }

  async fillCity(city: string) {
    await this.page.getByTestId("input-city").fill(city);
    await expect(this.page.getByTestId("input-city")).toHaveValue(city);
  }

  async fillBio(bio: string) {
    await this.page.getByTestId("textarea-bio").fill(bio);
    await expect(this.page.getByTestId("textarea-bio")).toHaveValue(bio);
  }

  async checkInterest(
    interest: "selenium" | "cypress" | "playwright" | "appium" | "jest",
  ) {
    await this.page.getByTestId(`checkbox-interest-${interest}`).check();
    await expect(
      this.page.getByTestId(`checkbox-interest-${interest}`),
    ).toBeChecked();
  }

  async fillPassword(password: string) {
    await this.page.getByTestId("input-password").fill(password);
    await expect(this.page.getByTestId("input-password")).toHaveValue(password);
  }

  async fillConfirmPassword(confirmPassword: string) {
    await this.page.getByTestId("input-confirm-password").fill(confirmPassword);
    await expect(this.page.getByTestId("input-confirm-password")).toHaveValue(
      confirmPassword,
    );
  }

  async acceptTerms() {
    await this.page.getByTestId("checkbox-terms").check({ force: true });
    await expect(this.page.getByTestId("checkbox-terms")).toBeChecked();
  }

  async submitForm() {
    await this.page
      .getByRole("button", { name: "Submit", exact: true })
      .click();
  }

  async resetForm() {
    await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  }

  async verifySuccessMessage() {
    await expect(this.page.getByTestId("success-icon")).toHaveText(
      "Form submitted successfully!",
    );
  }

  async verifyResetMessage() {
    await expect(this.page.getByTestId("input-first-name")).toBeEmpty();
  }
}
