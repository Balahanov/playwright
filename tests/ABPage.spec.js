const { test, expect } = require('@playwright/test');
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
        // const textContent = 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'

        await abPage.openPage();
        await abPage.checkTitle();
        await abPage.checkText();
    });
});