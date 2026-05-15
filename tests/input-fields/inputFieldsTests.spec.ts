// Scenario 1 Move Name Input
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
    await expect(page).toHaveURL('/practice/input-fields');
    await page.getByTestId('input-movie-name').fill('Inception');
    await expect(page.getByTestId('input-movie-name')).toHaveValue('Inception');

});
// Scenario 2 Append a text and press keyboard tab
test('append text and press keyboard tab', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
    await expect(page).toHaveURL('/practice/input-fields');
    await page.getByTestId('input-append-text').fill('I am good');
    await expect(page.getByTestId('input-append-text')).toHaveValue('I am good');
    await page.keyboard.press('Tab');
    await expect(page.getByTestId('input-append-text')).toHaveValue('I am good');
});
// Scenario 3 Verify text present inside input field
test('verify text present inside input field', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
    await expect(page).toHaveURL('/practice/input-fields');
    await page.getByTestId('input-verify-text').click();
    await expect(page.getByTestId('input-verify-text')).toHaveValue('QA PlayGround');
});
// Scenario 4 Clear the text
test('clear the text', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
    await expect(page).toHaveURL('/practice/input-fields');
    await expect(page.getByTestId('input-clear-text')).toHaveValue('QA PlayGround Clear Me');
    await page.getByTestId('input-clear-text').clear();
    await expect(page.getByTestId('input-clear-text')).toHaveValue('');
});
// Scenario 5 Check edit field is disabled
test('check edit field is disabled', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
    await expect(page).toHaveURL('/practice/input-fields');
    await expect(page.getByTestId('input-disabled')).toBeDisabled();
});
// Scenario 6 Check text is readonly
test('check text is readonly', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('link',{name: 'Practice Input Fields – Interact with different types of input fields'}).click();
    await expect(page).toHaveURL('/practice/input-fields');
    await expect(page.getByTestId('input-readonly')).toHaveAttribute('readonly');
});