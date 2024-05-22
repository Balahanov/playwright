const { expect } = require('@playwright/test');
const { MainPage } = require('./main.page');

exports.ABPage = class ABPage extends MainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.title = page.locator('#content').locator('h3');
        this.text = page.locator('#content').locator('p');
    };

    async openPage() {
        await this.open('abtest');
    };

    async checkTitle() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText(/A\/B Test Control|A\/B Test Variation 1/g);
    };

    async checkText() {
        const text1 = 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'

        await expect(this.text).toBeVisible();
        await expect(this.text).toHaveText(text1);
    };
};
