export class ProductPage {
    getAddToCartButton() {
        return cy.getByDataTest('add-to-cart');
    }

    getRemoveFromCartButton() {
        return cy.getByDataTest('remove');
    }

    clickAddToCartButton() {
        return this.getAddToCartButton().click();
    }

    clickRemoveFromCartButton() {
        return this.getRemoveFromCartButton().click();
    }
}