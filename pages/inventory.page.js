const { By } = require('selenium-webdriver');

class InventoryPage {
    constructor(driver) {
        this.driver = driver;

        this.firstProduct = By.css('.inventory_item button');
        this.cartBadge = By.className('shopping_cart_badge');
        this.cartIcon = By.className('shopping_cart_link');
    }

    async addFirstProductToCart() {
        await this.driver.findElement(this.firstProduct).click();
    }

    async getCartCount() {
        return await this.driver.findElement(this.cartBadge).getText();
    }

    async goToCart() {
        await this.driver.findElement(this.cartIcon).click();
    }
}

module.exports = InventoryPage;