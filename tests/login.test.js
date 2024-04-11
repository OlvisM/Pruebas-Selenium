const { describe } = require("mocha");
const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");


//Test 1: User y password corectos.

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await takeScreenshot(driver, "Login1");
await driver.findElement(By.id('login_field')).sendKeys('OlvisM')
await takeScreenshot(driver, "Login1");
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await takeScreenshot(driver, "Login1");
await driver.findElement(By.name('commit')).click();
await takeScreenshot(driver, "Login1");

await driver.sleep(2000)
await driver.quit();

    })
));


//Test 2: User Negativo, password positivo

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await takeScreenshot(driver, "Login2");
await driver.findElement(By.id('login_field')).sendKeys('Olvis')
await takeScreenshot(driver, "Login2");
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await takeScreenshot(driver, "Login2");
await driver.findElement(By.name('commit')).click();
await takeScreenshot(driver, "Login2");

await driver.sleep(2000)
await driver.quit();

    })
));


//Test 3: User positivo, password negativo.

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await takeScreenshot(driver, "Login3");
await driver.findElement(By.id('login_field')).sendKeys('OlvisM')
await takeScreenshot(driver, "Login3");
await driver.findElement(By.id('password')).sendKeys('Mejia#20040')
await takeScreenshot(driver, "Login3");
await driver.findElement(By.name('commit')).click();
await takeScreenshot(driver, "Login3");

await driver.sleep(2000)
await driver.quit();

    })
));



//Test 4: Campos vacio.

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await takeScreenshot(driver, "Login4");
await driver.findElement(By.id('login_field')).sendKeys('')
await takeScreenshot(driver, "Login4");
await driver.findElement(By.id('password')).sendKeys('')
await takeScreenshot(driver, "Login4");
await driver.findElement(By.name('commit')).click();
await takeScreenshot(driver, "Login4");

await driver.sleep(2000)
await driver.quit();

    })
));


//Test 5

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await takeScreenshot(driver, "Login5");
await driver.findElement(By.id('login_field')).sendKeys('OlvisM2')
await takeScreenshot(driver, "Login5");
await driver.findElement(By.id('password')).sendKeys('Mejia#20043')
await takeScreenshot(driver, "Login5");
await driver.findElement(By.name('commit')).click();
await takeScreenshot(driver, "Login5");

await driver.sleep(2000)
await driver.quit();

    })
));

async function takeScreenshot(driver, stepName) {
    const screenshot = await driver.takeScreenshot();
    const screenshotPath = path.join(__dirname, "screenshots", `${stepName}.png`);
    fs.writeFileSync(screenshotPath, screenshot, "base64");
    console.log(`Screenshot saved at: ${screenshotPath}`);
}


