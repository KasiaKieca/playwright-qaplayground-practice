import { Buttons } from "../pageObjects/buttons";
import { Dashboard } from "../pageObjects/dashboard";
import { InputFieldsPage } from "../pageObjects/inputFieldsPage";
import { LoginPage } from "../pageObjects/loginPage";
import { Forms } from "../pageObjects/forms";
import { FileUploadPage } from "../pageObjects/fileUpload";
import { RadioAndCheckbox } from "../pageObjects/radioAndCheckbox";

import { test as base, expect } from "@playwright/test";

type Pages = {
  buttons: Buttons;
  dashboard: Dashboard;
  inputFields: InputFieldsPage;
  login: LoginPage;
  forms: Forms;
  fileUpload: FileUploadPage; // 💡 Poprawione na krótką nazwę "fileUpload"
  radioAndCheckbox: RadioAndCheckbox;
};

export const test = base.extend<Pages>({
  buttons: async ({ page }, use) => {
    await use(new Buttons(page));
  },

  dashboard: async ({ page }, use) => {
    await use(new Dashboard(page));
  },

  inputFields: async ({ page }, use) => {
    await use(new InputFieldsPage(page));
  },

  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  forms: async ({ page }, use) => {
    await use(new Forms(page));
  },

  fileUpload: async ({ page }, use) => {
    // 💡 Poprawione na krótką nazwę "fileUpload"
    await use(new FileUploadPage(page));
  },

  radioAndCheckbox: async ({ page }, use) => {
    await use(new RadioAndCheckbox(page));
  },
});

export { expect };
