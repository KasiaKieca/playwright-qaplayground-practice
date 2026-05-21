import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class InputFields {
    constructor(private readonly page: Page){}
    
    async hasTitle() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
        await expect(this.page).toHaveURL('/practice/input-fields');
        await this.page.getByTestId('input-movie-name').fill('Inception');
        await expect(this.page.getByTestId('input-movie-name')).toHaveValue('Inception');   
    
    }

    async appendTextAndPressTab() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
        await expect(this.page).toHaveURL('/practice/input-fields');
        await this.page.getByTestId('input-append-text').fill('I am good');
        await expect(this.page.getByTestId('input-append-text')).toHaveValue('I am good');
        await this.page.keyboard.press('Tab');
}

    async verifityTextPresentInsideInput() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
        await expect(this.page).toHaveURL('/practice/input-fields');
        await this.page.getByTestId('input-verify-text').click();
        await expect(this.page.getByTestId('input-verify-text')).toHaveValue('QA PlayGround');
}
    async clearInputText() {
         await this.page.goto('/practice');
         await this.page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
         await expect(this.page).toHaveURL('/practice/input-fields');
         await expect(this.page.getByTestId('input-clear-text')).toHaveValue('QA PlayGround Clear Me');
         await this.page.getByTestId('input-clear-text').clear();
         await expect(this.page.getByTestId('input-clear-text')).toHaveValue('');
    }

    async checkEditFieldIsDisabled() {
         await this.page.goto('/practice');
         await this.page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
         await expect(this.page).toHaveURL('/practice/input-fields');
         await expect(this.page.getByTestId('input-disabled')).toBeDisabled();
}
    
    async checkTextIsReadonly() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
        await expect(this.page).toHaveURL('/practice/input-fields');
        await expect(this.page.getByTestId('input-readonly')).toHaveAttribute('readonly');
    }
}