export class LoginPage {
    get usernameInput() {
        return cy.getByDataTest('username');
    }

    get passwordInput() {
        return cy.getByDataTest('password');
    }

    get loginButton() {
        return cy.getByDataTest('login-button');
    }

    fillUsername(username: string) {
        this.usernameInput.type(username);
    }

    fillPassword(password: string) {
        this.passwordInput.type(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    fillAndLogin(username: string, password: string) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton();
    }

}