import { fi } from "@faker-js/faker";
import { expect, Page } from "@playwright/test";
import { Button } from "./components/buttons";
import { InputFields } from "./components/inputFields";

export class Dashboard {
  constructor(private readonly page: Page) {}

  async goToPage() {
    await this.page.goto("https://qaplayground.com/bank/dashboard");
  }

  async checkSkeletonLoadingState(selector: string, state: string) {
    const dashboardContainer = this.page.locator(selector);
    const skeletonCards = this.page.getByTestId("skeleton-card");

    await expect(dashboardContainer).toHaveAttribute("data-loading", "true");
    await expect(skeletonCards.first()).toBeVisible();
  }

  async verifyDashboardCardsLoaded(
    selector: string,
    dashboardPageContainer: string,
  ) {
    const dashboardContainer = this.page.locator(selector);
    await expect(dashboardContainer).toHaveAttribute(
      "data-loading",
      dashboardPageContainer,
    );

    const totalBalanceCard = this.page.getByTestId("total-balance-card");
    await expect(totalBalanceCard).toBeVisible();
    await expect(totalBalanceCard).toContainText("$");

    const accountsCountCard = this.page.getByTestId("accounts-count-card");
    await expect(accountsCountCard).toBeVisible();
    await expect(accountsCountCard).toContainText(/\d+/);

    const transactionsCountCard = this.page.getByTestId(
      "transactions-count-card",
    );
    await expect(transactionsCountCard).toBeVisible();
    await expect(transactionsCountCard).toContainText(/\d+/);
  }
  async goToQuickActionsPages(selector: string) {
    const addAccountButton = this.page.getByTestId("quick-add-account");
    await expect(addAccountButton).toBeVisible();
  }
  async clickNewTransaction(selector: string, expectedUrl: string) {
    const newTransation = this.page.getByTestId(selector);
    await expect(newTransation).toBeVisible();
    await newTransation.click();
    await expect(this.page).toHaveURL(expectedUrl);

    await this.page.goBack();
  }
  async clickViewAllAccounts(selector: string, anotherExpectedUrl: string) {
    const viewAccounts = this.page.getByTestId(selector);
    await expect(viewAccounts).toBeVisible();
    await viewAccounts.click();
    await expect(this.page).toHaveURL(anotherExpectedUrl);
  }
}
