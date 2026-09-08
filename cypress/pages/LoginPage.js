class LoginPage {

    usernameInput() {
        return cy.get('[data-test="username"]');
    }

    passwordInput() {
        return cy.get('[data-test="password"]');
    }

    loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    errorMessage() {
        return cy.get('[data-test="error"]');
    }

    enterUsername(username) {
        this.usernameInput().clear().type(username);
    }

    enterPassword(password) {
        this.passwordInput().clear().type(password);
    }

    clickLogin() {
        this.loginButton().click();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default LoginPage;
