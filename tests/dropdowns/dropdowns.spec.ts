import { test, expect } from '@playwright/test';

// Scenario 1: Select by Visible Text
test('select by Visible Text', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Handle single and multi-option dropdown selections'}).click();
    await expect(page).toHaveURL('/practice/dropdowns');
    await page.getByTestId('dropdown-fruit').click();
    await page.getByRole('option', { name: 'Apple' }).click();
    await expect(page.getByTestId('result-fruit')).toBeVisible();
});
// Scenario 2: Select by Value Attribute
test('select by Value Attribute', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Handle single and multi-option dropdown selections'}).click();
    await expect(page).toHaveURL('/practice/dropdowns');
    await page.getByTestId('dropdown-country').click();
    await page.getByRole('option', { name: 'India' }).click();
    await expect(page.getByTestId('result-country')).toBeVisible();
    await expect(page.getByTestId('result-country')).toContainText('Value: india'); 
});
// Scenario 3: Select Last Option & Get All Options
test('select last option & get all options', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Handle single and multi-option dropdown selections'}).click();
    await expect(page).toHaveURL('/practice/dropdowns');
    await page.getByTestId('dropdown-language').click();
    const options = page.getByRole('option');
    const allLanguages = await options.allTextContents();
    console.log('Wszystkie języki na liście to:', allLanguages);
    await options.last().click();
    await expect(page.getByTestId('result-language')).toBeVisible();
});
// Scenario 4: Multi-Select (CTRL + Click)
test('multi-select (CTRL + Click)', async ({ page, browserName }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Handle single and multi-option dropdown selections'}).click();
    await expect(page).toHaveURL('/practice/dropdowns');
    const multiSelect = page.getByTestId('dropdown-heroes');
    
    // WebKit has issues with modifier clicks on select elements
    // Use selectOption instead for better cross-browser compatibility
    if (browserName === 'webkit') {
        await multiSelect.selectOption({ value: 'ant-man' });
    } else {
        await multiSelect.click();
        const options = multiSelect.getByRole('option');
        await options.nth(0).click({ modifiers: ['Control'] });
    }
    
    const selectedOptions = await multiSelect.evaluate((select: HTMLSelectElement) => {
        const selected = [];
        for (const option of select.options) {
            if (option.selected) {
                selected.push(option.text);
            }
        }
        return selected;
    }, []);
    await expect(selectedOptions).toEqual(['Ant-Man']);
});