import { expect, Page } from "@playwright/test";

export class Button {
  constructor(private readonly page: Page) {}
  async clickButton(selector: string) {
    await this.page.click(selector);
  }
}
