import { fi } from "@faker-js/faker";
import { expect, Page } from "@playwright/test";

export class Buttons {
  constructor(private readonly page: Page) {}

  async goToButtonsPage() {
    await this.page.goto("/practice");
    await this.page
      .getByRole("link", {
        name: "Practice Buttons – Click, double-click, right-click, and disabled buttons",
      })
      .click();
    await expect(this.page).toHaveURL("/practice/buttons");
  }

  async clickToNavigate(selector: string, expectedUrl: string) {
    await this.page.getByTestId(selector).click();
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async getButtonCoordinates(selector: string, expectedText: string) {
    await this.page.getByTestId(selector).dblclick();
    await expect(this.page.getByTestId(selector)).toContainText(expectedText);
  }

  async getButtonColor(
    selector: string,
    cssProperty: string,
    expectedValue: string,
  ) {
    await this.page.getByTestId(selector).click();
    await expect(this.page.getByTestId(selector)).toHaveCSS(
      cssProperty,
      expectedValue,
    );
  }

  async getButtonFontSize(selector: string, fontSize: string, px: string) {
    await this.page.getByTestId("btn-size").click();
    await expect(this.page.getByTestId(selector)).toHaveCSS(fontSize, px);
  }

  async getButtonHeightAndWidth(selector: string) {
    await expect(this.page.getByTestId(selector)).toBeDisabled();
  }

  async clickAndHold(selector: string, btnClickHold: string) {
    await this.page.getByTestId(selector).click();
    await expect(this.page.getByTestId(selector)).toHaveText(btnClickHold);
  }

  async doubleClickButton(selector: string, btnDoubleClick: string) {
    await this.page.getByTestId(selector).dblclick();
    await expect(this.page.getByTestId(selector)).toHaveText(btnDoubleClick);
  }

  async rightClickButton(selector: string, btnRightClick: string) {
    await this.page.getByTestId(selector).click({ button: "right" });
    await expect(this.page.getByTestId("btn-right-click")).toHaveText(
      btnRightClick,
    );
  }

  async verifytyButtonIsEnabled(selector: string, btnGoToHome: string) {
    await this.page.getByTestId(selector).click();
    await expect(this.page).toHaveURL(btnGoToHome);
  }

  async verifyButtonIsResponsive(selector: string) {
    await this.page.setViewportSize({ width: 375, height: 667 });
    await expect(this.page.getByTestId(selector)).toBeVisible();
    await this.page.setViewportSize({ width: 768, height: 1024 });
    await expect(this.page.getByTestId(selector)).toBeVisible();
    await this.page.setViewportSize({ width: 1440, height: 900 });
    await expect(this.page.getByTestId(selector)).toBeVisible();
  }

  async verifyButonIsAccessible(checkUrl: string) {
    await this.page.keyboard.press("Tab");
    await this.page.keyboard.press("Enter");
    await expect(this.page).toHaveURL(checkUrl);
  }

  async verifyButtonHover(selector: string, hoverColor: string, rgb: string) {
    await this.page.getByTestId(selector);
    await this.page.getByTestId(selector).hover();
    await expect(this.page.getByTestId(selector)).toHaveCSS(hoverColor, rgb);
  }

  async verifyButtonPageLoadsWithoutErrors(url: string) {
    const consoleMessages: string[] = [];
    this.page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleMessages.push(msg.text());
      }
    });
    await this.page.goto(url);
    expect(consoleMessages).toHaveLength(0);
  }
}
