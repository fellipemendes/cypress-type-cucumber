declare namespace Cypress {
    interface Chainable {
        customCommandType(customVar: string): void;
        getToken(): Chainable<Response<element>>;
    }
}