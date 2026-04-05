const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function buildDriver() {
    let options = new chrome.Options();
    options.addArguments('--headless'); // CI friendly

    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}

module.exports = { buildDriver };