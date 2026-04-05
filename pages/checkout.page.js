const { By } = require('selenium-webdriver');

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;

        this.checkoutBtn = By.id('checkout');
        this.firstName = By.id('first-name');
        this.lastName = By.id('last-name');
        this.postalCode = By.id('postal-code');
        this.continueBtn = By.id('continue');
        this.finishBtn = By.id('finish');
        this.successMsg = By.className('complete-header');
    }

    async startCheckout() {
        await this.driver.findElement(this.checkoutBtn).click();
    }

    async fillInformation(first, last, zip) {
        await this.driver.findElement(this.firstName).sendKeys(first);
        await this.driver.findElement(this.lastName).sendKeys(last);
        await this.driver.findElement(this.postalCode).sendKeys(zip);
        await this.driver.findElement(this.continueBtn).click();
    }

    async finishCheckout() {
        await this.driver.findElement(this.finishBtn).click();
    }

    async getSuccessMessage() {
        return await this.driver.findElement(this.successMsg).getText();
    }
}

module.exports = CheckoutPage;