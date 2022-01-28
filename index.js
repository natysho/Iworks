const {Builder, By, Key, until} = require('selenium-webdriver');

(async function dummyFunction() {
    var driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.iworkplc.com/contact');
        var phoneNumberOne = await driver.findElement(By.xpath(`(//div[@id='comp-kktfmgn8'])//p//span`)).getText();
        var phoneNumberTwo = await driver.findElement(By.xpath(`(//div[@id='comp-ks7htvty'])//p//span`)).getText();
        console.log(phoneNumberOne);
        console.log(phoneNumberTwo);
        var officeNumber = phoneNumberOne.trim().substring(phoneNumberOne.length - 4);
        var mobileNumber = phoneNumberTwo.trim().substring(phoneNumberTwo.length - 4);
        console.log(officeNumber);
        console.log(mobileNumber);
        var dividend = parseInt(officeNumber)/parseInt(mobileNumber);
        console.log(dividend);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      } finally {
        await driver.quit();
      }
})();
