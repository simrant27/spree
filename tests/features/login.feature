Feature: login
    As an admin
    I want to log in to the website admin panel
    So that I can manage my products

    Background:
        Given user 'admin' has navigated to the admin login page


    Scenario: login with valid credentials
        When user 'admin' logs in with following credentials
            | email           | password    |
            | admin@admin.com | admin123456 |
        Then user 'admin' should be navigated to the admin panel dashboard


    Scenario Outline: login with invalid credentials
        When user 'admin' tries to log in with following credentials
            | email   | password   |
            | <email> | <password> |
        Then error message "<errorMessage>" should be shown
        Examples:
            | email            | password    | errorMessage               |
            | admin@admin.com  | admin156    | Invalid email or password. |
            | admin1@admin.com | admin123456 | Invalid email or password. |
            | admin1@admin.com | admin123    | Invalid email or password. |
            |                  |             | Invalid email or password. |
            | admin@admin.com  |             | Invalid email or password. |
            |                  | admin123456 | Invalid email or password. |
