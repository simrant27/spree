Feature: Login
    As an admin
    I want to login to the application
    So that I can access to the home page

Scenario: Login with valid credential
    Given the admin has navigated to the login page
    When the admin login with email "admin@admin.com" and password "admin123456"
    Then the admin should be navigated to the home page

Scenario: Login with invalid credential
    Given the admin has navigated to the login page
    When the admin login with email "admin1@admin.com" and password "123456"
    Then the "Invalid credentials" message should be pop in the login page