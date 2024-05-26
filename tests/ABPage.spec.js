const { test } = require('@playwright/test');
const { ABPage } = require('../pages/ab.page');

test.describe('A/B page tests', () => {
    test('Open page by clicking id', async ({ page }) => {
        const abPage = new ABPage(page);

        await abPage.open();
        await abPage.abTestingLink.click();
        await abPage.checkTitle();
    });

    test('Chect text content', async ({ page }) => {
        const abPage = new ABPage(page);

        await abPage.openPage();
        await abPage.checkTitle();
        await abPage.checkText();
    });
});