const { describe } = require("mocha");
const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");

//Test 1: User y password corectos.

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();


await driver.sleep(2000)
await driver.quit();

    })
));


//Test 2: User Negativo, password positivo

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('Olvis')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();

await driver.sleep(2000)
await driver.quit();

    })
));


//Test 3: User positivo, password negativo.

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisM')
await driver.findElement(By.id('password')).sendKeys('Mejia#20040')
await driver.findElement(By.name('commit')).click();

await driver.sleep(2000)
await driver.quit();

    })
));



//Test 4: Campos vacio.

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('')
await driver.findElement(By.id('password')).sendKeys('')
await driver.findElement(By.name('commit')).click();


await driver.sleep(2000)
await driver.quit();

    })
));


//Test 5

describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();


await driver.sleep(2000)
await driver.quit();

    })
));
//6
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();

await driver.sleep(2000)
await driver.quit();

    })
));
//7
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('Olvis');


await driver.sleep(2000)
await driver.quit();

    })
));
//8
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('Olvis');
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.sleep(2000)
await driver.quit();

    })
));
//9
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('Olvis');
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.findElement(By.id(':r6:')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//10
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('Olvis');
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.findElement(By.id(':r7:')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//11
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('olvism');
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.findElement(By.id(':r6:')).click();
await driver.findElement(By.id(':r9:')).click();

await driver.sleep(2000)
await driver.quit();


    })
));
//12
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('#@lvis');
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.findElement(By.id(':r7:')).click();
await driver.findElement(By.id(':r9:')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//13
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('OlvisM');
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//14
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
// test 15
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r9:')).click();
await driver.findElement(By.id(':r7:')).click();
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//16
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r7:')).click();
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//17
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('OlvisM');
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//test 18
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('OlvisM');
await driver.findElement(By.id(':r4:')).sendKeys('Selenium es un conjunto de utilidades que facilita la labor de obtener juegos de pruebas para aplicaciones web. Para ello nos permite grabar, editar y depurar casos de prueba, que podrán ser ejecutados de forma automática e iterativa posteriormente.');
await driver.findElement(By.id(':r7:')).click();
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//test 19
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r9:')).click();
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));
//test 20
describe('Login', ()=>(
    it("login with standard_user credentials", async () => {
let driver = new Builder(). forBrowser('chrome').build();
await driver.get('https://github.com/login')
await driver.findElement(By.id('login_field')).sendKeys('OlvisMejia')
await driver.findElement(By.id('password')).sendKeys('Mejia#2004')
await driver.findElement(By.name('commit')).click();
await driver.findElement(By.className('Button--primary Button--small Button')).click();
await driver.findElement(By.id(':r3:')).sendKeys('Proyecto-Final');
await driver.findElement(By.id(':r4:')).sendKeys('Hola este es repositorio nuevo');
await driver.findElement(By.id(':r6:')).click();
await driver.findElement(By.id(':r9:')).click();
await driver.findElement(By.className('types__StyledButton-sc-ws60qy-0 jUHnzz')).click();
await driver.sleep(2000)
await driver.quit();


    })
));





