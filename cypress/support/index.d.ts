declare namespace Cypress {
    interface Chainable<Element> {
        login(): void;
        getByDataTest(dataTest: string): Chainable<Element>;
    }
}
