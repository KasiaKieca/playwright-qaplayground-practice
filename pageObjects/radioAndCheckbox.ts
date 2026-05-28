import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class RadioAndCheckbox {
    constructor(private readonly page: Page){}
    
    async verifyRadioButtonSelection() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Radio & Checkbox – Toggle radio buttons and checkboxes in different states'}).click();
        await expect(this.page).toHaveURL('/practice/radio-checkbox');
        await this.page.getByTestId('radio-yes-1').click();
        await expect(this.page.getByTestId('radio-yes-1')).toBeChecked();
    }

    async verifySelectingAnotherRadioDeselectPreviousOne() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Radio & Checkbox – Toggle radio buttons and checkboxes in different states'}).click();
        await expect(this.page).toHaveURL('/practice/radio-checkbox');
        await this.page.getByTestId('radio-yes-1').click();
        await expect(this.page.getByTestId('radio-yes-1')).toBeChecked();
        await this.page.getByTestId('radio-no-1').click();
        await expect(this.page.getByTestId('radio-yes-1')).not.toBeChecked();
        await expect(this.page.getByTestId('radio-no-1')).toBeChecked();    
    }

    async verifyOnlyOneRadioButtonCanBeSelectedAtATime() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Radio & Checkbox – Toggle radio buttons and checkboxes in different states'}).click();
        await expect(this.page).toHaveURL('/practice/radio-checkbox');
        const radioGroup = this.page.locator('input[name="model-2"]'); 
        const count = await radioGroup.count();

        for (let i = 0; i < count; i++) {
            const currentRadio = radioGroup.nth(i);
            await currentRadio.click();

            for (let j = 0; j < count; j++) {
                const radioToVerify = radioGroup.nth(j);
                
                if (i === j) {
                    await expect(radioToVerify).toBeChecked();
                } else {
                    await expect(radioToVerify).not.toBeChecked();
                }
            }
        }
    }
}