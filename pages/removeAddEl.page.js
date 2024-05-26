const { expect } = require('@playwright/test');
const { MainPage } = require('./main.page');

exports.RemoveAddEl = class RemoveAddEl extends MainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.title = page.locator('#content').locator('h3');
        this.addElementButton = page.getByText(/^Add Element$/g);
        this.elementList = page.locator('#elements')
        this.elementButton = this.elementList.locator('button');
    };

    async openPage() {
        await this.open('add_remove_elements/');
    };

    async checkTitle() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText(/Add\/Remove Elements/g);
    };

    async addElement() {
        await this.addElementButton.click();
    };

    async checkElements(numberOfEls) {
        expect(await this.elementButton.count()).toBe(numberOfEls);
    };

    async clickDeleteElement(n = 'last') {
        console.log(typeof n);

        console.log(typeof n == 'number');
        if (n == 'last') await this.elementButton.last().click();
        else if (n == 'first') await this.elementButton.first().click();
        else if (typeof n == 'number') await this.elementButton.nth(n - 1).click();
        else throw Error('Provided number of element is - "' + n + '"');
    };
};
