const { test } = require('@playwright/test');
const { BasicAuth } = require('../pages/basicAuth.page');

test.describe('Basic auth tests', () => {
    test.describe('Valid credentials', () => {
        test.use({ httpCredentials: { username: 'admin', password: 'admin' } })
        test('Open page by clicking id', async ({ page }) => {
            const basicAuth = new BasicAuth(page);

            await basicAuth.open();
            await basicAuth.basicAuthLink.click();
            await basicAuth.checkTitle();
        });
    });
    test.describe('Invalid credentials', () => {
        test.use({ httpCredentials: { username: 'wrong', password: 'wrong' } })
        test('Wrong authorization', async ({ page }) => {
            const basicAuth = new BasicAuth(page);

            await basicAuth.openPage();
            await basicAuth.checkNotAuthTitle();
        });
    });
});