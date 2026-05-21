import { fi } from "@faker-js/faker";
import {expect, Page} from "@playwright/test";

export class Buttons {
    constructor(private readonly page: Page){}
    
    async openButtonsPage() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
        await expect(this.page).toHaveURL('/practice/buttons');
        await this.page.getByTestId('btn-goto-home').click();
            await expect(this.page).toHaveURL('https://qaplayground.com');
    
    }

    async getButtonCoordinates() {
         await this.page.goto('/practice');
         await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
         await expect(this.page).toHaveURL('/practice/buttons');
         await this.page.getByTestId('btn-find-location').dblclick();
         await expect(this.page.getByTestId('btn-find-location')).toContainText('Find Location');   
    }

     async getButtonColor() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
        await expect(this.page).toHaveURL('/practice/buttons');
        await this.page.getByTestId('btn-find-color').click();
        await expect(this.page.getByTestId('btn-find-color')).toHaveCSS('background-color', 'rgb(147, 197, 253)');      
     }

     async getButtonFontSize() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
        await expect(this.page).toHaveURL('/practice/buttons');
        await this.page.getByTestId('btn-size').click();
        await expect(this.page.getByTestId('btn-size')).toHaveCSS('font-size', '14px');
     }

     async getButtonHeightAndWidth() {
        await this.page.goto('/practice');
        await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
        await expect(this.page).toHaveURL('/practice/buttons');
        await expect(this.page.getByTestId('btn-disabled')).toBeDisabled();
     }

     async clickAndHold() {
       await this.page.goto('/practice');
       await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
       await expect(this.page).toHaveURL('/practice/buttons');
       await this.page.getByTestId('btn-click-hold').click();
       await expect(this.page.getByTestId('btn-click-hold')).toHaveText('Click and Hold!'); 
     }

     async doubleClickButton() {
       await this.page.goto('/practice');
       await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
       await expect(this.page).toHaveURL('/practice/buttons');
       await this.page.getByTestId('btn-double-click').dblclick();
       await expect(this.page.getByTestId('btn-double-click')).toHaveText('Double Click Me'); 
} 

    async rightClickButton() {
       await this.page.goto('/practice');
       await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
       await expect(this.page).toHaveURL('/practice/buttons');
       await this.page.getByTestId('btn-right-click').click({ button: 'right' });
       await expect(this.page.getByTestId('btn-right-click')).toHaveText('Right Click Me');
    }

    async verifytyButtonIsEnabled() {
       await this.page.goto('/practice');
       await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
       await expect(this.page).toHaveURL('/practice/buttons');
       await this.page.getByTestId('btn-goto-home').click();
       await expect(this.page).toHaveURL('https://qaplayground.com');
    }

    async verifyButtonIsResponsive() {
       await this.page.goto('/practice');
       await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
       await expect(this.page).toHaveURL('/practice/buttons');
       await this.page.setViewportSize({ width: 375, height: 667 });
       await expect(this.page.getByTestId('btn-goto-home')).toBeVisible();
       await this.page.setViewportSize({ width: 768, height: 1024 });
       await expect(this.page.getByTestId('btn-goto-home')).toBeVisible();
       await this.page.setViewportSize({ width: 1440, height: 900 });
       await expect(this.page.getByTestId('btn-goto-home')).toBeVisible();
    }

    async verifyButonIsAccessible() {
       await this.page.goto('/practice');
       await this.page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
       await expect(this.page).toHaveURL('/practice/buttons');
       await this.page.keyboard.press('Tab');
       await this.page.keyboard.press('Enter');
       await expect(this.page).toHaveURL('https://qaplayground.com');
    }

    async verifyButtonHover() {
      await this.page.goto('/practice/buttons');
      await this.page.getByTestId('btn-click-hold');
      await this.page.getByTestId('btn-click-hold').hover();
      await expect(this.page.getByTestId('btn-click-hold')).toHaveCSS('background-color', 'rgb(37, 99, 235)');
    }

    async verifyButtonPageLoadsWithoutErrors() {
    const consoleMessages: string[] = [];
    this.page.on('console', (msg) => {
        if (msg.type() === 'error') {
            consoleMessages.push(msg.text());
        }
    });
    await this.page.goto('/practice/buttons');
    expect(consoleMessages).toHaveLength(0);
}





}  
