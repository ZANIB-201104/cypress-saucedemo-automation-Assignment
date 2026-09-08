# Cypress Automation – SauceDemo

## Project Overview

This project is a UI automation testing project for the SauceDemo web application using the Cypress testing framework.

The project focuses on building maintainable end-to-end UI automation by using Page Object Model (POM), reusable Cypress custom commands, and structured test suites.

## Learning Objectives

The project demonstrates:

- Cypress automation framework fundamentals
- Page Object Model implementation
- Reusable Cypress custom commands
- Automated login and product navigation flows
- Structured automation project architecture
- UI validation and test assertions

## Tasks Completed

### 1. Cypress Project Setup

- Initialized a Cypress project using Node.js and npm
- Configured Cypress for end-to-end testing
- Created a structured project folder architecture

### 2. Login Failure Scenario

Automated negative login scenarios using invalid credentials and verified that appropriate error messages are displayed.

### 3. Login Success and Homepage Validation

Automated successful login using valid SauceDemo credentials and verified:

- Successful login
- Navigation to the Inventory page
- Products page title
- Product listings

### 4. Product Navigation and Validation

Automated product navigation from the Inventory page to the Product Details page and validated:

- Product name
- Product price
- Product description
- Add to Cart button

### 5. Custom Commands

Created reusable Cypress custom commands for commonly used actions such as:

- Login
- Navigation to the login page

Custom commands help reduce code duplication and improve test readability.

### 6. Page Object Model

Implemented Page Object Model to separate page locators and actions from test scripts.

The project includes:

- `LoginPage.js`
- `InventoryPage.js`
- `ProductPage.js`

## Tools & Technologies

- Cypress
- JavaScript
- Node.js
- npm

## Project Structure

```text
cypress-saucedemo/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── inventory.cy.js
│   │   └── product.cy.js
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   └── ProductPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Author

- ZANIB ASLAM
