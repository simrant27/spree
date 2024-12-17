class LoginPage{
    constructor(){
        this.loginBtnSelector = "input[value='Login']";
        this.emailFieldSelector = "#spree_user_email";
        this.passwordFieldSelector = "#spree_user_password";
        this.errorMessageSelector = "div.alert-danger";
    }

    async navigateToAdminLoginPage(){
        await page.goto("http://localhost:3000/admin/login");
    }

    async login(email,password){
        await page.fill(this.emailFieldSelector, email);
        await page.fill(this.passwordFieldSelector, password); 
        await page.locator(this.loginBtnSelector).click();
    }
}

module.exports = { LoginPage };