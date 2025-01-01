const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const util = require('util');

const { LoginPage } = require("../pageObjects/LoginPage");
const { AddProduct } = require("../pageObjects/AddProduct");

const loginPage = new LoginPage();
const addProduct = new AddProduct();

Given('user {string} has logged in to the admin panel using following credentials:', async function (user, credentials) {
    await loginPage.navigateToAdminLoginPage();
    credentials = credentials.hashes();
    await loginPage.login(credentials[0].email, credentials[0].password);
    await page.waitForURL("http://localhost:3000/", { timeout: 5000 });
  });

When('user {string} adds a new product with following details:', async function (user, productData) {
    await addProduct.navigateToProductPage();
    productData = productData.hashes();
    await addProduct.addNewProduct(productData[0].name, productData[0].sku, productData[0].prototype, productData[0].masterPrice);
  });

Then('the product {string} should be listed in the list of products', async function (name) {
    await page.locator(addProduct.menuItemProductSelector).click();
    const productSelector = util.format(addProduct.productSelector,name);
    await expect(page.locator(productSelector)).toHaveText(name);
  });