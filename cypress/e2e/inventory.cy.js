import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('SauceDemo Inventory Tests', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        cy.visit('/');

        loginPage.login(
            'standard_user',
            'secret_sauce'
        );
    });

    it('should successfully login and display inventory page', () => {

        cy.url().should('include', '/inventory.html');

        inventoryPage.pageTitle()
            .should('be.visible')
            .and('contain', 'Products');

    });

    it('should display products on inventory page', () => {

        inventoryPage.productItems()
            .should('have.length.greaterThan', 0);

        inventoryPage.productNames()
            .should('have.length.greaterThan', 0);

        inventoryPage.productPrices()
            .should('have.length.greaterThan', 0);

    });

    it('should login using custom command', () => {

        cy.visit('/');

        cy.login(
            'standard_user',
            'secret_sauce'
        );

        cy.url().should('include', '/inventory.html');

    });

});