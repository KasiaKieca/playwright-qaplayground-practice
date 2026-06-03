import { test } from "@playwright/test";
import { LoginPage } from "../../pageObjects/loginPage";
// Scenario 1 Login valid username and password
test("Valid Username", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.fillUserName("admin");
  await loginPage.fillPassword("admin123");
  await loginPage.clickLoginButton();
});
// Scenario 2 Login with Remember me checkbox
test("Remember me checkbox", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.fillUserName("admin");
  await loginPage.fillPassword("admin123");
  await loginPage.clickRememberMe();
  await loginPage.clickLoginButton();
});
// Scenario 3 Login with eye icon
test("Eye icon", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.fillUserName("admin");
  await loginPage.fillPassword("admin123");
  await loginPage.clickEyeIcon();
  await loginPage.clickLoginButton();
});
// Scenario 4 Login with invalid username and password
test("Invalid username and password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.fillUserName("admin");
  await loginPage.fillPassword("wrong123");
  await loginPage.clickLoginButton();
});
