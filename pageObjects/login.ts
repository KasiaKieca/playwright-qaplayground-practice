import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class Login {
    constructor(private readonly page: Page){}
    
    async login() {
        await this.page.goto('https://qaplayground.com/bank');
        await expect(this.page).toHaveURL('https://qaplayground.com/bank');
        await this.page.getByTestId('username-input').fill('admin');
        await expect(this.page.getByTestId('username-input')).toHaveValue('admin');
        await this.page.getByTestId('password-input').fill('admin123');
        await expect(this.page.getByTestId('password-input')).toHaveValue('admin123');
        await this.page.getByTestId('login-button').click();
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/dashboard');

    }
}