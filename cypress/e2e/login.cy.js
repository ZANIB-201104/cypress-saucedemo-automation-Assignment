import LoginPage from '../pages/LoginPage';

describe('SauceDemo Login Tests', () => {

    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('should display error for invalid credentials', () => {

        loginPage.login('invalid_user', 'wrong_password');

        loginPage.errorMessage()
            .should('be.visible')
            .and('contain', 'Username and password do not match');

    });

    it('should display error when username is empty', () => {

        loginPage.enterPassword('secret_sauce');
        loginPage.clickLogin();

        loginPage.errorMessage()
            .should('be.visible')
            .and('contain', 'Username is required');

    });

});
