Feature: search product
    As an admin
    I want to seach products
    So that I can manage them


    Scenario Outline: search product
        Given user "admin" has logged in to the admin panel using following credentials:
            | email           | password    |
            | admin@admin.com | admin123456 |
        And user "admin" has added products with following details:
            | name   | sku   | protoType   | masterPrice   |
            | <name> | <sku> | <protoType> | <masterPrice> |
        When user "admin" searches for the product "Shampoo"
        Then the product with name "Shampoo" should be displayed
        Examples:
            | name    | sku | protoType | masterPrice |
            | Shampoo | 20  | proto     | 250         |
            | Pen     | 332 | penProto  | 50          |
