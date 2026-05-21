import { test, expect } from '@playwright/test';
import { Forms } from '../../pageObjects/forms';    

// Fill in all fields with valid data and submit successfully

// test('fill in all fields with valid data and submit successfully', async ({ page }) => {
//     const forms = new Forms (page);
//     await forms.openFormsPage();
//     await forms.firstAndLastName('John', 'Doe');
//     await forms.fillEmail('john@example.com');
//     await forms.fillDateOfBirth('1990-01-01');
//     await forms.selectGenderMale();
//     await forms.selectCountry('USA');
//     await forms.fillCity('New York');
//     await forms.fillBio('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
//     await forms.checkInterest('playwright');
//     await forms.fillPassword('Password123');
//     await forms.fillConfirmPassword('Password123');
//     await forms.acceptTerms();
//     await forms.submitForm();
//     await forms.verifySuccessMessage();
// });
//Fill in all fields with valid data and reset in the end
test('fill in all fields and click reset form', async ({ page }) => {
    const forms = new Forms (page);
    await forms.openFormsPage();
    await forms.firstAndLastName('John', 'Doe');
    await forms.fillEmail('john@example.com');
    await forms.fillDateOfBirth('1990-01-01');
    await forms.selectGenderMale();
    await forms.selectCountry('USA');
    await forms.fillCity('New York');
    await forms.fillBio('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await forms.checkInterest('playwright');
    await forms.fillPassword('Password123');
    await forms.fillConfirmPassword('Password123');
    await forms.acceptTerms();
    await forms.verifyResetMessage();
    
});