import { Page } from "@playwright/test";

export class HomePage {

    readonly page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto("https://epicweb.ee.doe.gov/EPICWeb/#/home");
    }
}