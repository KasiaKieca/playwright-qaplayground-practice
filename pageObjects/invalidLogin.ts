import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class InvalidLoginPage {
    constructor(private readonly page: Page){}
    
    async invalidLogin() {
        await this.page.goto('https://qaplayground.com/bank');
        await expect(this.page).toHaveURL('https://qaplayground.com/bank');
        await this.page.getByTestId('username-input').fill('admin');
        await expect(this.page.getByTestId('username-input')).toHaveValue('admin');
        await this.page.getByTestId('password-input').fill('wrong123');
        await this.page.getByTestId('login-button').click();
        await expect(this.page.getByTestId('login-alert')).toBeVisible();
        await expect(this.page.getByTestId('login-alert')).toContainText('Invalid username or password. Please try again');
        await expect(this.page).toHaveURL('https://qaplayground.com/bank');

    }
}

export class QucikActions {
    constructor(private readonly page: Page){}
    
    async quickActionsNavigateToCorrectPages() {
        await this.page.goto('https://qaplayground.com/bank/dashboard');
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/dashboard');
        await this.page.getByTestId('quick-add-account').click();
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/accounts?action=add');
        await expect(this.page.getByTestId('account-modal')).toBeVisible();
        await this.page.goBack();
        await this.page.getByTestId('quick-new-transaction').click();
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/transactions?action=new');
        await expect(this.page.getByTestId('modal-title')).toBeVisible();
       
    }
}