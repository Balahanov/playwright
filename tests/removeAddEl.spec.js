const { test } = require('@playwright/test');
const { RemoveAddEl } = require('../pages/removeAddEl.page');

test.describe('Add/Remove Elements tests', () => {
    test('Open page by clicking id', async ({ page }) => {
        const removeAddEl = new RemoveAddEl(page);

        await removeAddEl.open();
        await removeAddEl.addRemoveLink.click();
        await removeAddEl.checkTitle();
    });

    test('Add couple of els and delete it', async ({ page }) => {
        const removeAddEl = new RemoveAddEl(page);

        await removeAddEl.openPage();
        await removeAddEl.addElement();
        await removeAddEl.checkElements(1);
        await removeAddEl.addElement();
        await removeAddEl.checkElements(2);
        await removeAddEl.clickDeleteElement();
        await removeAddEl.checkElements(1);
        await removeAddEl.clickDeleteElement();
        await removeAddEl.checkElements(0);
    });
});