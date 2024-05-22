const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.abTestingLink = page.locator('a', { hasText: 'A/B Testing' });
        this.addRemoveLink = page.locator('a', { hasText: 'Add/Remove Elements' });
        this.basicAuthLink = page.locator('a', { hasText: 'Basic Auth' });
        this.brokenImgLink = page.locator('a', { hasText: 'Broken Images' });
        this.challengingDomLink = page.locator('a', { hasText: 'Challenging DOM' });
        this.checkboxesLink = page.locator('a', { hasText: 'Checkboxes' });
        this.contextMenuLink = page.locator('a', { hasText: 'Context Menu' });
        this.digestAuthenticationLink = page.locator('a', { hasText: 'Digest Authentication' });
        this.disappearingElementsLink = page.locator('a', { hasText: 'Disappearing Elements' });
        this.dragAndDropLink = page.locator('a', { hasText: 'Drag and Drop' });
        this.dropdownLink = page.locator('a', { hasText: 'Dropdown' });
        this.dynamicContentLink = page.locator('a', { hasText: 'Dynamic Content' });
        this.dynamicControlsLink = page.locator('a', { hasText: 'Dynamic Controls' });
        this.dynamicLoadingLink = page.locator('a', { hasText: 'Dynamic Loading' });
        this.entryAdLink = page.locator('a', { hasText: 'Entry Ad' });
        this.exitIntentLink = page.locator('a', { hasText: 'Exit Intent' });
        this.fileDownloadLink = page.locator('a', { hasText: /^File Download$/ });
        this.fileUploadLink = page.locator('a', { hasText: 'File Upload' });
        this.floatingMenuLink = page.locator('a', { hasText: 'Floating Menu' });
        this.forgotPasswordLink = page.locator('a', { hasText: 'Forgot Password' });
        this.formAuthenticationLink = page.locator('a', { hasText: 'Form Authentication' });
        this.framesLink = page.locator('a', { hasText: /^Frames$/ });
        this.geolocationLink = page.locator('a', { hasText: 'Geolocation' });
        this.horizontalSliderLink = page.locator('a', { hasText: 'Horizontal Slider' });
        this.hoversLink = page.locator('a', { hasText: 'Hovers' });
        this.infiniteScrollLink = page.locator('a', { hasText: 'Infinite Scroll' });
        this.inputsLink = page.locator('a', { hasText: 'Inputs' });
        this.jQueryUIMenusLink = page.locator('a', { hasText: 'JQuery UI Menus' });
        this.javaScriptAlertsLink = page.locator('a', { hasText: 'JavaScript Alerts' });
        this.javaScriptOnloadEventErrorLink = page.locator('a', { hasText: 'JavaScript onload event error' });
        this.keyPressesLink = page.locator('a', { hasText: 'Key Presses' });
        this.largeDeepDOMLink = page.locator('a', { hasText: 'Large & Deep DOM' });
        this.multipleWindowsLink = page.locator('a', { hasText: 'Multiple Windows' });
        this.nestedFramesLink = page.locator('a', { hasText: 'Nested Frames' });
        this.notificationMessagesLink = page.locator('a', { hasText: 'Notification Messages' });
        this.redirectLink = page.locator('a', { hasText: 'Redirect Link' });
        this.secureFileDownloadLink = page.locator('a', { hasText: 'Secure File Download' });
        this.shadowDOMLink = page.locator('a', { hasText: 'Shadow DOM' });
        this.shiftingContentLink = page.locator('a', { hasText: 'Shifting Content' });
        this.slowResourcesLink = page.locator('a', { hasText: 'Slow Resources' });
        this.sortableDataTablesLink = page.locator('a', { hasText: 'Sortable Data Tables' });
        this.statusCodesLink = page.locator('a', { hasText: 'Status Codes' });
        this.typosLink = page.locator('a', { hasText: 'Typos' });
        this.WYSIWYGEditorLink = page.locator('a', { hasText: 'WYSIWYG Editor' });

        this.mainHeader = page.locator('h1');
        this.mainSubHeader = page.locator('h2');
    };

    async open(path = '') {
        await this.page.goto('/' + path);
    };

    async allElemsAreDisplayed() {
        await expect(this.mainHeader).toHaveText('Welcome to the-internet');
        await expect(this.mainSubHeader).toHaveText('Available Examples');
        // check visibility for all el's except of 'page'
        for (const key in this) {
            if (key !== 'page') await expect(this[key]).toBeVisible();
        };
    };
};