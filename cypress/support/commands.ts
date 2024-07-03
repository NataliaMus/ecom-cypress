import {LoginPage} from "./pages/loginPage";

Cypress.Commands.add('getByDataTest', (dataTest) => {
    cy.get(`[data-test="${dataTest}"]`);
});


Cypress.Commands.add('login', () => {
        cy.visit('/');
        const loginPage = new LoginPage();
        loginPage.fillAndLogin(
            Cypress.env('username'),
            Cypress.env('password')
        );
});