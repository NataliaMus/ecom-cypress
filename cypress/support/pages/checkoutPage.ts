import {CustomerData} from "../userData";

export class CheckoutPage {
    getCheckoutButton() {
        return cy.getByDataTest('checkout');
    }

    getCartList() {
        return cy.getByDataTest('cart-list');
    }

    getFirstNameInput() {
        return cy.getByDataTest('firstName');
    }

    getLastNameInput() {
        return cy.getByDataTest('lastName');
    }

    getPostalCodeInput() {
        return cy.getByDataTest('postalCode');
    }

    getContinueButton() {
        return cy.getByDataTest('continue');
    }

    getFinishButton() {
        return cy.getByDataTest('finish');
    }

    getPaymentInformation() {
        return cy.getByDataTest('payment-info-value');
    }

    getCheckoutItems() {
        return cy.getByDataTest('inventory-item');
    }

    getCompleteOrderHeader() {
        return cy.getByDataTest('complete-header');
    }

    getContinueShoppingButton() {
        return cy.getByDataTest('continue-shopping');
    }

    getRemoveFromCartButton() {
        return cy.contains('Remove');
    }

    clickCheckoutButton() {
        return this.getCheckoutButton().click();
    }

    fillFirstName(firstName: string) {
        return this.getFirstNameInput().type(firstName);
    }

    fillLastName(lastName: string) {
        return this.getLastNameInput().type(lastName);
    }

    fillPostalCode(postalCode: string) {
        return this.getPostalCodeInput().type(postalCode);
    }

    fillUserInformation(data: CustomerData) {
        this.fillFirstName(data.firstName);
        this.fillLastName(data.lastName);
        this.fillPostalCode(data.postalCode);
        return this;
    }

    clickContinueButton() {
        return this.getContinueButton().click();
    }

    clickFinishCheckoutButton() {
        return this.getFinishButton().click();
    }

    clickContinueShoppingButton() {
        return this.getContinueShoppingButton().click();
    }

    clickRemoveFromCartButton() {
        return this.getRemoveFromCartButton().click();
    }
}
