const { expect } = require('chai');
const { buildDriver } = require('../utils/driver');
const LoginPage = require('../pages/login.page');

describe('Login Tests', function () {
    this.timeout(20000);
    let driver;
    let loginPage;

    before(async () => {
        driver = await buildDriver();
        loginPage = new LoginPage(driver);
    });

    after(async () => {
    if (driver) {
        await driver.quit();
    }
    });

    it('should login successfully with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        const url = await driver.getCurrentUrl();
        expect(url).to.include('inventory');
    });
});