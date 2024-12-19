class AddProduct{
    constructor(){
        this.accountSelector ="//button[@id='account-button']";
        this.adminPanelSelector = "//a[contains(text(), 'Admin Panel')]";
        this.sidebarProductSelector = "//a[@href='#sidebar-products']";
        this.menuItemProductSelector = "//a[text()='Products']";
        this.newProductButtonSelector = "(//a[@id='admin_new_product'])[1]";
        this.productNameSelector = "//input[@id='product_name']";
        this.SKUSelector = "//input[@id='product_sku']";
        this.prototypeSelectOptionSelector = "//span[@id='select2-product_prototype_id-container']";
        this.prototypeTextFieldSelector = "//input[@class='select2-search__field']";
        this.productPriceSelector = "//input[@id='product_price']";
        this.shippingCategorySelector = "//span[text()='Default']";
        this.shippingCategoryDigitalSelector = "//li[text()='Digital']";
        this.createButtonSelector = "//button[@type='submit']";
        this.productSelector= "//a[text()='%s']";
    }

    async navigateToProductPage(){
        await page.locator(this.accountSelector).click();
        await page.locator(this.adminPanelSelector).click();
        await page.locator(this.sidebarProductSelector).click();
        await page.locator(this.menuItemProductSelector).click();
    }

    async addNewProduct(name, sku, prototype, masterPrice){
        await page.locator(this.newProductButtonSelector).click();
        await page.fill(this.productNameSelector, name);
        await page.fill(this.SKUSelector, sku);
        await page.locator(this.prototypeSelectOptionSelector).click();
        await page.fill(this.prototypeTextFieldSelector, prototype);
        await page.fill(this.productPriceSelector, masterPrice);
        await page.locator(this.shippingCategorySelector).click();
        await page.locator(this.shippingCategoryDigitalSelector).click();
        await page.locator(this.createButtonSelector).click();
    }
}

module.exports = { AddProduct }