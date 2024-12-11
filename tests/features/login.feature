Feature: login
    As an admin
    I want to login to the admin panel
    So that I can manage my products

Background:
    Given the admin has navigated to the login page

Scenario: login with valid credentials
    When the admin logs in with email "admin@admin.com" and password "admin123456"
    Then the admin should be navigated to the home page

Scenario: login with invalid credentials
    When the admin logs in with email "admin1@admin.com" and password "123456"
    Then error message "Invalid credentials" should be shown