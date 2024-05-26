const { expect } = require('@playwright/test');
const { MainPage } = require('./main.page');

exports.BasicAuth = class BasicAuth extends MainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.title = page.locator('#content').locator('h3');
        this.notAuthorized = page.locator('body')
    };

    async openPage() {
        await this.open('basic_auth');
    };

    async checkTitle() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText(/Basic Auth/g);
    };

    async checkNotAuthTitle() {
        await expect(this.notAuthorized).toBeVisible();
        await expect(this.notAuthorized).toHaveText(/Not authorized/g);
    };
    
};
