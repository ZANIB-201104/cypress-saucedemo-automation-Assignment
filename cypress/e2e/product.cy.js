import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import ProductPage from '../pages/ProductPage';

describe('SauceDemo Product Tests', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const productPage = new ProductPage();

    beforeEach(() => {
        cy.visit('/');

        loginPage.login(
            'standard_user',
            'secret_sauce'
        );
    });

    it('should navigate to product details page', () => {

        inventoryPage.openProduct('Sauce Labs Backpack');

        cy.url().should('include', '/inventory-item.html');

        productPage.productName()
            .should('be.visible')
            .and('contain', 'Sauce Labs Backpack');

        productPage.productDescription()
            .should('be.visible');

        productPage.productPrice()
            .should('be.visible');

    });

    it('should display product details correctly', () => {

        inventoryPage.openProduct('Sauce Labs Bike Light');

        productPage.productName()
            .should('contain', 'Sauce Labs Bike Light');

        productPage.productPrice()
            .should('be.visible');

        productPage.addToCartButton()
            .should('be.visible');

    });

});