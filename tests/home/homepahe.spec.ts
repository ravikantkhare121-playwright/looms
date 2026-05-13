import { test, expect } from '../../Fixtures/baseFixture';

test.describe('Loom Fashion Home Page Tests', () => {

    test('Verify user can search product', async ({ homePage,page }) => {

        await homePage.openHomePage();
        await homePage.verifyHomePageUI();

        //await homePage.searchProduct('Shirt');
        await homePage.verifyAllMenuOptions();
         //expect(page.url()).not.toBe(previousUrl);

        //await expect(homePage.page).toHaveTitle(/Loom Fashion/);

    });


});