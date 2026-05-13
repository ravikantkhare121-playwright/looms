import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils/logger';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Locators
    //loginPopupCloseBtn = this.page.locator("button:has(svg.lucide-x)");
    loginPopupCloseBtn =this.page.locator("button.absolute.top-4.right-4");

    logo =   this.page.locator("//img[@alt='Loom Fashion']")

    searchBox = this.page.getByPlaceholder('Search...').nth(0);

    //menMenu = this.page.locator("//button[@class='p-2 text-black']//*[name()='svg']");
    menMenu = this.page.locator("//button[contains(@class,'p-2')]").first();
    menuOptions = this.page.locator("//div[contains(@class,'overflow-y-auto')]//div[contains(@class,'cursor-pointer') and normalize-space()]");

    // Methods

    async openHomePage() {
        await this.openUrl('/');
        await this.handleOptionalPopup(this.loginPopupCloseBtn);
    }
     async verifyHomePageUI(){
        await this.isElementVisible(this.logo);
        console.log("hello git")

     }

    async searchProduct(productName: string) {
        await this.fillText(this.searchBox, productName);
        await this.page.keyboard.press('Enter');
    }

    async verifyAllMenuOptions() {
        await this.hoverElement(this.menMenu);
        await this.page.waitForTimeout(2000);
        const totalOptions =await this.menuOptions.count();
       Logger.info(`Clicking on : ${totalOptions}`)

       for(let i =0; i<totalOptions;i++)
        {
       
        await this.hoverElement(this.menMenu);
        const option = this.menuOptions.nth(i);
        const optionText =await option.textContent();
        Logger.info(`Clicking on : ${optionText}`);
        const previousUrl =this.page.url();

        await option.click();
        await this.page.waitForLoadState('domcontentloaded');
        const currentUrl =this.page.url();
        Logger.info(`Navigated URL : ${currentUrl}`);
        await this.page.goBack();
        await this.page.waitForLoadState('domcontentloaded');  

         Logger.info(`Navigated URL : ${this.page.url()}`);
       await this.handleOptionalPopup(
    this.loginPopupCloseBtn
);
        
         
        

        
        // await this.handleOptionalPopup(this.loginPopupCloseBtn);

       
       }


    }

}