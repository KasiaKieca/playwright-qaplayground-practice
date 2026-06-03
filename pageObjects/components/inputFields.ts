import { Page, expect } from "@playwright/test";

export class InputFields {
  constructor(private readonly page: Page) {}

  async fillInputField(testId: string, value: string) {
    const field = this.page.getByTestId(testId);
    await field.fill(value);
    await expect(field).toHaveValue(value);
  }
}
