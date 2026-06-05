import { test, expect } from "../../fixtures/Page";

test.describe("Forms Tests", () => {
  test.beforeEach(async ({ forms }) => {
    await forms.goToFormsPage();
  });

  // Scenario 1: Fill in all fields with valid data and submit successfully
  test("fill in all fields with valid data and submit successfully", async ({
    forms,
  }) => {
    await forms.firstAndLastName("John", "Doe");
    await forms.fillEmail("john@example.com");
    await forms.fillDateOfBirth("1990-01-01");
    await forms.selectGenderMale();
    await forms.selectCountry("USA");
    await forms.fillCity("New York");
    await forms.fillBio(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    );
    await forms.checkInterest("playwright");
    await forms.fillPassword("Password123");
    await forms.fillConfirmPassword("Password123");
    await forms.acceptTerms();
    await forms.submitForm();
    await forms.verifySuccessMessage();
  });

  // Scenario 2: Fill in all fields and click reset form
  test("fill in all fields and click reset form", async ({ forms }) => {
    await forms.firstAndLastName("John", "Doe");
    await forms.fillEmail("john@example.com");
    await forms.fillDateOfBirth("1990-01-01");
    await forms.selectGenderMale();
    await forms.fillCity("New York");
    await forms.fillBio(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    );
    await forms.checkInterest("playwright");
    await forms.fillPassword("Password123");
    await forms.fillConfirmPassword("Password123");
    await forms.acceptTerms();
    await forms.resetForm();
    await forms.verifyResetMessage();
  });
});
