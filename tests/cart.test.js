const { expect } = require('chai');
const { buildDriver } = require('../utils/driver');
const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');

describe('Cart Tests', function () {
    this.timeout(20000);
    let driver;
    let loginPage;
    let inventoryPage;

    before(async () => {
        driver = await buildDriver();
        loginPage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
    });

    after(async () => {
    if (driver) {
        await driver.quit();
    }
    });

    it('should add product to cart', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addFirstProductToCart();
        const count = await inventoryPage.getCartCount();

        expect(count).to.equal('1');
    });
});