export class GlobalActions {
    getValidationError() {
        return cy.getByDataTest('error');
    }
}