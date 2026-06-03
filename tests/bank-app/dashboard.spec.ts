import { test } from "@playwright/test";
import { Dashboard } from "../../pageObjects/dashboard";
import { Login } from "../../pageObjects/login";

test.describe("Dashboard Tests", () => {
  let dashboard: Dashboard;

  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.login();

    dashboard = new Dashboard(page);
    await dashboard.goToPage();
  });

  // Scenario 1: Skeleton Loading State
  test("skeleton loading state appears on page", async () => {
    await dashboard.checkSkeletonLoadingState(
      "#dashboard-page-container",
      "true",
    );
  });
  // Scenario 2: Dashboard Cards Load Correctly
  test("dashboard cards load correctly", async () => {
    await dashboard.verifyDashboardCardsLoaded(
      "#dashboard-page-container",
      "false",
    );
  });
  // Scenario 3: Quick Actions navigate to correct pages
  test("quick actions navigate to correct pages", async () => {
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
