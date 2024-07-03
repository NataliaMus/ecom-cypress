import {HomePage} from "../support/pages/homePage";
import {ProductPage} from "../support/pages/productPage";
import {CheckoutPage} from "../support/pages/checkoutPage";
import {
    correctCustomerData,
    firstNameValidation,
    lastNameValidation,
    paymentOption, postalCodeValidation,
    successfulOrderInformation
} from "../support/userData";
import {GlobalActions} from "../support/globalActions";
import {Routes} from "../support/routes";

describe('Purchase tests', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();
    const productName = 'Sauce Labs Backpack';
    const globalActions = new GlobalActions();

    beforeEach(() => {
        cy.wrap(
            Cypress.automation('remote:debugger:protocol', {
                command: 'Network.clearBrowserCache',
            })
        );
        cy.login();
    });

    afterEach(() => {
        cy.clearAllCookies();
        cy.clearLocalStorage();
    });

    it('should add product to cart from product page, and complete purchase', () => {
        homePage.openProduct(productName);
        productPage.clickAddToCartButton();
        homePage.getCartBadge().should('exist');
        homePage.openShoppingCart();
        checkoutPage.clickCheckoutButton();
        checkoutPage.fillUserInformation(correctCustomerData);
        checkoutPage.clickContinueButton();
        checkoutPage.getCheckoutItems().should('contain', productName);
        checkoutPage.clickFinishCheckoutButton();
        checkoutPage.getCompleteOrderHeader().should('contain', successfulOrderInformation);
    });

    it('should add product to cart from inventory page, and complete purchase', () => {
        homePage.addSauceLabBackPackToCart();
        homePage.getCartBadge().should('exist');
        homePage.openShoppingCart();
        checkoutPage.clickCheckoutButton();
        checkoutPage.fillUserInformation(correctCustomerData);
        checkoutPage.clickContinueButton();
        checkoutPage.getCheckoutItems().should('contain', productName);
        checkoutPage.clickFinishCheckoutButton();
        checkoutPage.getCompleteOrderHeader().should('contain', successfulOrderInformation);
    });

    it('should open checkout and check continue shopping button redirects to inventory page', () => {
        homePage.openShoppingCart();
        checkoutPage.clickContinueShoppingButton();
        homePage.getInventoryPage().should('be.visible');
        cy.url().should('contain', Routes.INVENTORY)
    });

    it('should be able to remove product from cart in product view', () => {
        homePage.openProduct(productName);
        productPage.clickAddToCartButton();
        homePage.getCartBadge().should('be.visible');
        homePage.getShoppingCart().should('contain', 1);
        productPage.clickRemoveFromCartButton();
        homePage.getShoppingCart().should('not.contain', 1);
    });

    it('should be able to remove product from cart in cart view', () => {
        homePage.openProduct(productName);
        productPage.clickAddToCartButton();
        homePage.openShoppingCart();
        checkoutPage.getCartList().should('contain', productName);
        checkoutPage.clickRemoveFromCartButton();
        checkoutPage.getCartList().should('not.contain', productName);
    });

    it('should check available payment options', () => {
        homePage.openShoppingCart();
        checkoutPage.clickCheckoutButton();
        checkoutPage.fillUserInformation(correctCustomerData);
        checkoutPage.clickContinueButton();
        checkoutPage.getPaymentInformation().should('contain', paymentOption);
    });

    it('should not be able to proceed to checkout with empty first name in customer information', () => {
        homePage.openShoppingCart();
        checkoutPage.clickCheckoutButton();
        checkoutPage.clickContinueButton();
        globalActions.getValidationError().should('contain', firstNameValidation);
    });

    it('should not be able to proceed to checkout with empty last name in customer information', () => {
        homePage.openShoppingCart();
        checkoutPage.clickCheckoutButton();
        checkoutPage.fillFirstName(correctCustomerData.firstName);
        checkoutPage.clickContinueButton();
        globalActions.getValidationError().should('contain', lastNameValidation);
    });

    it('should not be able to proceed to checkout with empty postal code in customer information', () => {
        homePage.openShoppingCart();
        checkoutPage.clickCheckoutButton();
        checkoutPage.fillFirstName(correctCustomerData.firstName);
        checkoutPage.fillLastName(correctCustomerData.lastName);
        checkoutPage.clickContinueButton();
        globalActions.getValidationError().should('contain', postalCodeValidation);
    });

});