const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');

test.describe('Main page tests', () => {
    test('Common Ui checks', async ({ page }) => {
        const mainPage = new MainPage(page);

        await mainPage.open();
        await expect(page).toHaveTitle(/The Internet/);
        await mainPage.allElemsAreDisplayed();
    });
});
