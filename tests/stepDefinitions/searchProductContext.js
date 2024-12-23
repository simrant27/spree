const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { util } = require("util");

const { LoginPage } = require("../pageObjects/LoginPage");
const { AddProduct } = require("../pageObjects/AddProduct");
const { SearchProduct } = require("../pageObjects/SearchProduct");

const loginPage = new LoginPage();
const addProduct = new AddProduct();
const searchProduct = new SearchProduct();

Given("user {string} has added products with following details:", async function(user, productData){
    await addProduct.navigateToProductPage();
    product = productData.hashes();
    await addProduct.addNewProduct(product[0].name, product[0].sku, product[0].protoType, product[0].masterPrice);
    await page.locator(addProduct.menuItemProductSelector).click();
    const productSelector = util.format(addProduct.productSelector,product[0].name);
    await expect(page.locator(productSelector)).toHaveText(product[0].name);
});