const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


async function buildDriver() {
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}

module.exports = { buildDriver };
