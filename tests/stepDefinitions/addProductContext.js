const { Given, When, Then } = require("@cucumber/cucumber")
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");
const { AddProduct } = require("../pageObjects/AddProduct");

const loginPage = new LoginPage();
const addProduct = new AddProduct();

Given('user {string} has logged in to the admin panel using following credentials:',async function (user, credentials) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.navigateToAdminLoginPage();
    credentials = credentials.hashes();
    await loginPage.login(credentials[0].email, credentials[0].password);
    await expect(page.url()).toBe("http://localhost:3000/");
  });

When('user {string} adds a new product with following data:', async function (user, data) {
    await addProduct.navigateToNewProductPage();
    data = data.hashes();
    for(let item of data){
        await addProduct.addNewProduct(item.name, item.sku, item.masterPrice, item.shippingCategories) ;
    }
  });

Then('the product {string} should be listed in the list of products', async function (name) {
    await page.locator(this.menuItenProductSelector).click();
  });


