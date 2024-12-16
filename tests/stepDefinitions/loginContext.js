const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const loginBtnLocator = "input[value='Login']";
const emailFieldLocator = "#spree_user_email";
const passwordFieldLocator = "#spree_user_password";
const alertLocator = "div.alert-danger"

Given('user {string} has navigated to the admin login page', async function (user) {
   await page.goto("http://localhost:3000/admin/login");
   await expect(page.url()).toBe("http://localhost:3000/admin/login");
});

When('user {string} logs in with following credentials', async function (user, credentials) {
    credentials = credentials.hashes();
    await page.locator(emailFieldLocator).fill(credentials[0].email);
    await page.fill(passwordFieldLocator, credentials[0].password);
    await  page.locator(loginBtnLocator).click();
});

Then('user {string} should be navigated to the admin panel dashboard', async function (user) {
    await expect(page.url()).toBe("http://localhost:3000/");
});

When('user {string} tries to log in with following credentials', async function (user, credentials) {
    credentials = credentials.hashes();
    for(let credential of credentials){
        await page.locator(emailFieldLocator).fill(credential.email);
        await page.locator(passwordFieldLocator).fill(credential.password);
        await page.locator(loginBtnLocator).click();
    }
});

Then('error message {string} should be shown', async  function (errorMessage) {
    const errmsg = await page.locator(alertLocator).textContent();
    await expect(errmsg).toEqual(errorMessage)
});
