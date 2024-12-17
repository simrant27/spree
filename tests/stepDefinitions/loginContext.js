const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");

const loginPage = new LoginPage;

Given('user {string} has navigated to the admin login page', async function (user) {
    await loginPage.navigateToAdminLoginPage();
    await expect(page.url()).toBe("http://localhost:3000/admin/login");
});

When('user {string} logs in with following credentials', async function (user, credentials) {
    credentials = credentials.hashes();
    await loginPage.login(credentials[0].email, credentials[0].password);
});

Then('user {string} should be navigated to the admin panel dashboard', async function (user) {
    await expect(page.url()).toBe("http://localhost:3000/");
});

When('user {string} tries to log in with following credentials', async function (user, credentials) {
    credentials = credentials.hashes();
    for(let credential of credentials){
        await loginPage.login(credential.email, credential.password);
    }
});

Then('error message {string} should be shown', async function (errorMessage) {
    const errMessage = await page.locator(loginPage.errorMessageSelector).textContent();
    await expect(errMessage).toEqual(errorMessage);
});
