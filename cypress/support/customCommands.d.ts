declare namespace Cypress {
    interface Chainable<Subject> {
        customCommandType(customVar: any): Chainable<any>
        getToken(): Chainable<any>
  }
}