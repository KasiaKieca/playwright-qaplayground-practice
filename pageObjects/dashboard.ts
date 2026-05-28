import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class Dashboard {
    constructor(private readonly page: Page){}
    
    async skeletonLoadingStateAppearsOnPage() {
        await this.page.goto('https://qaplayground.com/bank/dashboard');
        
        const dashboardContainer = this.page.locator('#dashboard-page-container');
        await expect(dashboardContainer).toHaveAttribute('data-loading', 'true');
        
        const skeletonCards = this.page.getByTestId('skeleton-card');
        await expect(skeletonCards.first()).toBeVisible();
        
        await expect(dashboardContainer).toHaveAttribute('data-loading', 'false', { timeout: 2000 });
        
        const totalBalanceCard = this.page.getByTestId('total-balance-card');
        await expect(totalBalanceCard).toBeVisible();
        await expect(totalBalanceCard).toContainText('$');
        
        const accountsCountCard = this.page.getByTestId('accounts-count-card');
        await expect(accountsCountCard).toBeVisible();
        await expect(accountsCountCard).toContainText(/\d+/);
        
        const transactionsCountCard = this.page.getByTestId('transactions-count-card');
        await expect(transactionsCountCard).toBeVisible();
        await expect(transactionsCountCard).toContainText(/\d+/);
    }
}