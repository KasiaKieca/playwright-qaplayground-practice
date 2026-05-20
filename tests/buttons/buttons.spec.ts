// Scenario 1: Navigate to Home Page
import { test, expect } from '@playwright/test';

test('navigate to home page', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-goto-home').click();
    await expect(page).toHaveURL('https://qaplayground.com');
});
// Scenario 2: Get Button X & Y Coordinates
test('get button x & y coordinates', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-find-location').dblclick();
    await expect(page.getByTestId('btn-find-location')).toContainText('Find Location');
});
// Scenario 3: Get Button Color
test ('get button color', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-find-color').click();
    await expect(page.getByTestId('btn-find-color')).toHaveCSS('background-color', 'rgb(147, 197, 253)');
   await expect(page.getByTestId('btn-find-color')).toHaveCSS('background-color', 'rgb(147, 197, 253)');

});
// Scenario 4: Get Button Font Size
test ('get button font size', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-size').click();
    await expect(page.getByTestId('btn-size')).toHaveCSS('font-size', '14px');
    await expect(page.getByTestId('btn-size')).toHaveCSS('font-size', '14px');
});

//  Scenario 5: Get Button Height & Width
test ('get button height & width', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await expect(page.getByTestId('btn-disabled')).toBeDisabled();
});

// Scenario 6: Click and Hold for 1.5 sec
test('click and hold for 1.5 sec', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-click-hold').click();
    await expect(page.getByTestId('btn-click-hold')).toHaveText('Click and Hold!');
});
// Scenario 7: Double Click Button
test('double click button', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-double-click').dblclick();
    await expect(page.getByTestId('btn-double-click')).toHaveText('Double Click Me');
});
// Scenario 8: Right Click Button
test('right click button', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-right-click').click({ button: 'right' });
    await expect(page.getByTestId('btn-right-click')).toHaveText('Right Click Me');
});
// Scenario 9: Verifity button is enabled when it should be
test('verify button is enabled when it should be', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.getByTestId('btn-goto-home').click();
    await expect(page).toHaveURL('https://qaplayground.com');

});// Scenario 10: Verifity button is responsive on diffrent screen sizes
test('verify button is responsive on different screen sizes', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('btn-goto-home')).toBeVisible();
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByTestId('btn-goto-home')).toBeVisible();
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.getByTestId('btn-goto-home')).toBeVisible();
});
// Scenario 11: Verify button is accessible via keyboard
test('verify button is accessible via keyboard', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Buttons – Click, double-click, right-click, and disabled buttons'}).click();
    await expect(page).toHaveURL('/practice/buttons');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('https://qaplayground.com');
});
// Scenario 12: Verifity button i s accessible to screen readers
test('verify button is accessible to screen readers', async ({ page }) => {
    await page.goto('/practice/buttons');
    await expect(page.getByRole('button', { name: 'Go To Home' })).toBeVisible();
});
// Scenario 13: Verifity buton hover state is visually distinct
test('verify button hover state is visually distinct', async ({ page }) => {
    await page.goto('/practice/buttons');
    const button = page.getByTestId('btn-click-hold');
    await button.hover();
    await expect(button).toHaveCSS('background-color', 'rgb(37, 99, 235)');
});
// Scenario 14: Verifity button page loads without errors
test('verify button page loads without errors', async ({ page }) => {
    const consoleMessages: string[] = [];
    page.on('console', (msg) => {
        if (msg.type() === 'error') {
            consoleMessages.push(msg.text());
        }
    });
    await page.goto('/practice/buttons');
    expect(consoleMessages).toHaveLength(0);
});