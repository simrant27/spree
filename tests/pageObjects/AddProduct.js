class AddProduct{
    constructor(){
        this.accountSelector ="//button[@id='account-button']";
        this.adminPanelSelector = "//a[contains(text(), 'Admin Panel')]";
        this.sidebarProductSelector = "//a[@href='#sidebar-products']";
        this.menuItemProductSelector = "//li[contains(@class,'sidebar-menu-item ')] /a[@href = '/admin/products']";
        this.newProductButtonSelector = "//div[contains(@class, 'page-actions')]/a[@id = 'admin_new_product']";
        this.productNameSelector = "//input[@id='product_name']";
        this.skuSelector = "//input[@id='product_sku']";
        this.productPriceSelector = "//input[@id='product_price']";
        this.createButtonSelector = "//button[@type='submit']";
        this.tableContentSelector = "//table[@id='listing_products']/tbody/tr[1]/td[2]/a";
    }

    async navigateToNewProductPage(){
        await page.locator(this.accountSelector).click();
        await page.locator(this.adminPanelSelector).click();
        await page.locator(this.sidebarProductSelector).click();
        await page.locator(this.menuItemProductSelector).click();
        await page.locator(this.newProductButtonSelector).click();
    }

    async addNewProduct(name, sku, masterPrice, shippingCategories){
        await page.fill(this.productNameSelector, name);
        // await page.fill(this.skuSelector, sku);
        await page.fill(this.productPriceSelector, masterPrice);
        await page.locator(this.createButtonSelector).click();
    }
}

module.exports = { AddProduct }