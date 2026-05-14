import { Page, Locator, expect } from '@playwright/test';
import { Logger } from '../utils/logger';
export class BasePage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openUrl(url: string) {
        Logger.info(`Navigating to URL : ${url}`);
        await this.page.goto(url,{waitUntil: 'domcontentloaded',timeout:60000});
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async fillText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async getTitle() {
        return await this.page.title();
    }

    async verifyUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }
    async isElementVisible(locator:Locator,timeout=3000){
        try{
            await locator.waitFor({state:'visible',timeout});
            return true
        }catch{
            return false;
        }
    }
    // handleOptionalPopup
    async handleOptionalPopup(locator: Locator) {

        try{

            if(await this.isElementVisible(locator)) {
                Logger.info('Optional popup displayed');
                await locator.click();
                Logger.info('Popup closed successfully');
                }

            }catch(error) {

            Logger.warn('Popup not displayed');

            }

    }

    async verifyTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async hoverElement(locator:Locator, popupCloseBtn?: Locator){
        Logger.info('Hovering on element')
        if (popupCloseBtn) {

        if (await popupCloseBtn.isVisible().catch(() => false)) {

            Logger.info('Popup detected');

            await popupCloseBtn.click({ force: true });

            Logger.info('Popup closed');

            await this.page.waitForTimeout(2000);
        }
    }


        await locator.waitFor({state:'visible',timeout:1000});
        await locator.hover();
    }


}