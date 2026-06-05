import { test, expect } from "../../fixtures/Page";

test.describe("Login Page Tests", () => {
  test.beforeEach(async ({ login }) => {
    await login.goToLoginPage();
  });

  // Scenario 1 Login valid username and password
  test("Valid Username", async ({ login }) => {
    await login.fillUserName("admin");
    await login.fillPassword("admin123");
    await login.clickLoginButton();
  });
  // Scenario 2 Login with Remember me checkbox
  test("Remember me checkbox", async ({ login }) => {
    await login.fillUserName("admin");
    await login.fillPassword("admin123");
    await login.clickRememberMe();
    await login.clickLoginButton();
  });
  // Scenario 3 Login with eye icon
  test("Eye icon", async ({ login }) => {
    await login.fillUserName("admin");
    await login.fillPassword("admin123");
    await login.clickEyeIcon();
    await login.clickLoginButton();
  });
  // Scenario 4 Login with invalid username and password
  test("Invalid username and password", async ({ login }) => {
    await login.goToLoginPage();
    await login.fillUserName("admin");
    await login.fillPassword("wrong123");
    await login.clickLoginButton();
  });
});
