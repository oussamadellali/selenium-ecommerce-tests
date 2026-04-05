const { expect } = require('chai');
const { buildDriver } = require('../utils/driver');
const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const CheckoutPage = require('../pages/checkout.page');

describe('Checkout Tests (E2E)', function () {
    this.timeout(30000);

    let driver;
    let loginPage;
    let inventoryPage;
    let checkoutPage;

    before(async () => {
        driver = await buildDriver();
        loginPage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
        checkoutPage = new CheckoutPage(driver);
    });

    after(async () => {
        if (driver) await driver.quit();
    });

    it('should complete checkout successfully', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addFirstProductToCart();
        await inventoryPage.goToCart();

        await checkoutPage.startCheckout();
        await checkoutPage.fillInformation('Oussama', 'Test', '12345');
        await checkoutPage.finishCheckout();

        const message = await checkoutPage.getSuccessMessage();
        expect(message).to.include('Thank you for your order');
    });
});