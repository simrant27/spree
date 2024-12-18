Feature: add product
    As an admin
    I want to add new products
    So that I can list it into products


    Scenario: add new product
        Given user "admin" has logged in to the admin panel using following credentials:
            | email           | password    |
            | admin@admin.com | admin123456 |
        When user "admin" adds a new product with following data:
            | name    | sku   | prototype | masterPrice |  
            | Shampoo | 20    | proto     | 250         |
        Then the product "Shampoo" should be listed in the list of products


