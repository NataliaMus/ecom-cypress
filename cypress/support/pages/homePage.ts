export class HomePage {
    getSauceLabBackPackAddToCartButton() {
        return cy.getByDataTest('add-to-cart-sauce-labs-backpack');
    }

    getCartBadge() {
        return cy.getByDataTest('shopping-cart-badge');
    }

    getInventoryPage() {
        return cy.getByDataTest('inventory-container');
    }

    getShoppingCart() {
        return cy.getByDataTest('shopping-cart-link');
    }

    getProduct(itemName: string) {
        return cy.contains(itemName);
    }

    openProduct(itemName: string){
        return this.getProduct(itemName).click();
    }

    openShoppingCart() {
        return this.getShoppingCart().click();
    }

    addSauceLabBackPackToCart() {
        return this.getSauceLabBackPackAddToCartButton().click();
    }


}
