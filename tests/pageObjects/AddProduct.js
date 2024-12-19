class AddProduct{
    constructor(){
        this.accountSelector ="//button[@id='account-button']";
        this.adminPanelSelector = "//a[contains(text(), 'Admin Panel')]";
        this.sidebarProductSelector = "//a[@href='#sidebar-products']";
        this.menuItemProductSelector = "//li[contains(@class,'sidebar-menu-item ')] /a[@href = '/admin/products']";
        this.newProductButtonSelector = "//div[contains(@class, 'page-actions')]/a[@id = 'admin_new_product']";
        this.productNameSelector = "//input[@id = 'product_name']";
        this.skuSelector = "//input[@id = 'product_sku']";
        this.prototypeSelectOptionSelector = "//span[@id = 'select2-product_prototype_id-container']";
        this.prototypeTextFieldSelector = "//input[@class = 'select2-search__field']"
        this.productPriceSelector = "//input[@id = 'product_price']";
        this.shippingCategorySelector = "//span[@aria-labelledby='select2-product_shipping_category_id-container']";
        this.shippingCategoryDigitalSelector = "//li[@id='select2-product_shipping_category_id-result-skun-2']";
        this.createButtonSelector = "//button[@type = 'submit']"
        this.productSelector= "//a[text()='%s']";
    }

    async navigateToNewProductPage(){
        await page.locator(this.accountSelector).click();
        await page.locator(this.adminPanelSelector).click();
        await page.locator(this.sidebarProductSelector).click();
        await page.locator(this.menuItemProductSelector).click();
        await page.locator(this.newProductButtonSelector).click();
    }

    async addNewProduct(name, sku,prototype, masterPrice){
        await page.fill(this.productNameSelector, name);
        await page.fill(this.skuSelector, sku);
        await page.locator(this.prototypeSelectOptionSelector).click();
        await page.fill(this.prototypeTextFieldSelector, prototype);
        await page.fill(this.productPriceSelector, masterPrice);
        await page.locator(this.shippingCategorySelector).click();
        await page.locator(this.shippingCategoryDigitalSelector).click();
        await page.locator(this.createButtonSelector).click();
    }
}

module.exports = { AddProduct }