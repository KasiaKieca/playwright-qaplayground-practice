import { test, expect } from '@playwright/test';

// Fill in all fields with valid data and submit successfully

test('fill in all fields with valid data and submit successfully', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: ' Fill and submit forms with validation scenarios'}).click();
    await expect(page).toHaveURL('/practice/forms');
    await page.getByTestId('input-first-name').fill('John');
    await expect(page.getByTestId('input-first-name')).toHaveValue('John');
    await page.getByTestId('input-last-name').fill('Doe');
    await expect(page.getByTestId('input-last-name')).toHaveValue('Doe');
    await page.getByTestId('input-email').fill('john@example.com');
    await expect(page.getByTestId('input-email')).toHaveValue('john@example.com');
    await page.getByTestId('input-dob').fill('1990-01-01');;
    await expect(page.getByTestId('input-dob')).toHaveValue('1990-01-01');
    await page.getByTestId('radio-gender-male').check();
    await page.getByTestId('select-country').click();
    await page.getByRole('option', { name: 'USA' }).click();
    await expect(page.getByTestId('select-country')).toContainText('USA');
    await page.getByTestId('input-city').fill('New York');
    await expect(page.getByTestId('input-city')).toHaveValue('New York');
    await page.getByTestId('textarea-bio').fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await expect(page.getByTestId('textarea-bio')).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await page.getByTestId('checkbox-interest-selenium').check();
    await expect(page.getByTestId('checkbox-interest-selenium')).toBeChecked();
    await page.getByTestId('input-password').fill('Password123');
    await expect(page.getByTestId('input-password')).toHaveValue('Password123');
    await page.getByTestId('input-confirm-password').fill('Password123');
    await expect(page.getByTestId('input-confirm-password')).toHaveValue('Password123');    
    await page.getByTestId('checkbox-terms').check({ force: true });
    await expect(page.getByTestId('checkbox-terms')).toBeChecked();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await expect(page.getByTestId('success-icon')).toHaveText('Form submitted successfully!');
});
//Fill in all fields with valid data and reset in the end
test('fill in all fields and click reset form', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: ' Fill and submit forms with validation scenarios'}).click();
    await expect(page).toHaveURL('/practice/forms');
    await page.getByTestId('input-first-name').fill('John');
    await expect(page.getByTestId('input-first-name')).toHaveValue('John');
    await page.getByTestId('input-last-name').fill('Doe');
    await expect(page.getByTestId('input-last-name')).toHaveValue('Doe');
    await page.getByTestId('input-email').fill('john@example.com');
    await expect(page.getByTestId('input-email')).toHaveValue('john@example.com');
    await page.getByTestId('input-dob').fill('1990-01-01');
    await expect(page.getByTestId('input-dob')).toHaveValue('1990-01-01');
    await page.getByTestId('radio-gender-male').check();
    await page.getByTestId('select-country').click();
    await page.getByRole('option', { name: 'USA' }).click();
    await expect(page.getByTestId('select-country')).toContainText('USA');
    await page.getByTestId('input-city').fill('New York');
    await expect(page.getByTestId('input-city')).toHaveValue('New York');
    await page.getByTestId('textarea-bio').fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await expect(page.getByTestId('textarea-bio')).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await page.getByTestId('checkbox-interest-selenium').check();
    await expect(page.getByTestId('checkbox-interest-selenium')).toBeChecked();
    await page.getByTestId('input-password').fill('Password123');
    await expect(page.getByTestId('input-password')).toHaveValue('Password123');
    await page.getByTestId('input-confirm-password').fill('Password123');
    await expect(page.getByTestId('input-confirm-password')).toHaveValue('Password123');    
    await page.getByTestId('checkbox-terms').check({ force: true });
    await expect(page.getByTestId('checkbox-terms')).toBeChecked();
    await page.getByTestId('reset-form-btn').click();
    await expect(page.getByTestId('input-first-name')).toBeEmpty();
});