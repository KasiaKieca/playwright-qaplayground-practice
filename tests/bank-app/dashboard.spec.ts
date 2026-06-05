import { test, expect } from "../../fixtures/Page";
import { LoginPage } from "../../pageObjects/loginPage";

test.describe("Dashboard Tests", () => {
  test.beforeEach(async ({ login, dashboard }) => {
    await login.goToLoginPage();
    await login.fillUserName("admin");
    await login.fillPassword("admin123");
    await login.clickLoginButton();
    await dashboard.goToPage();
  });

  // Scenario 1: Skeleton Loading State
  test("skeleton loading state appears on page", async ({ dashboard }) => {
    await dashboard.checkSkeletonLoadingState(
      "#dashboard-page-container",
      "true",
    );
  });
  // Scenario 2: Dashboard Cards Load Correctly
  test("dashboard cards load correctly", async ({ dashboard }) => {
    await dashboard.verifyDashboardCardsLoaded(
      "#dashboard-page-container",
      "false",
    );
  });
  // Scenario 3: Quick Actions navigate to correct pages
  test("quick actions navigate to correct pages", async ({ dashboard }) => {
    await dashboard.goToQuickActionsPages("quick-add-account");
    await dashboard.clickNewTransaction(
      "quick-new-transaction",
      "/bank/transactions?action=new",
    );
    await dashboard.clickViewAllAccounts(
      "quick-view-accounts",
      "/bank/accounts",
    );
  });
});
