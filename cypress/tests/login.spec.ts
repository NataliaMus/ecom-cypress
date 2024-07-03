import {
    incorrectCredentialsValidation,
    incorrectUserData,
} from "../support/userData";
import {LoginPage} from "../support/pages/loginPage";
import {GlobalActions} from "../support/globalActions";
import {Routes} from "../support/routes";

describe('Login tests', () => {
    const loginPage = new LoginPage();
    const globalActions = new GlobalActions();

    beforeEach(() => {
        cy.wrap(
            Cypress.automation('remote:debugger:protocol', {
                command: 'Network.clearBrowserCache',
            })
        );
        cy.visit('/');
    });

    it('should be able to login with proper data', () => {
        cy.login();
        cy.url().should('contain', Routes.INVENTORY);
    });

    it('should see validation when login with incorrect data', () => {
        loginPage.fillAndLogin(incorrectUserData.username, incorrectUserData.password);
        globalActions.getValidationError().should('contain', incorrectCredentialsValidation);
        cy.url().should('not.contain', Routes.INVENTORY);
    });
});
