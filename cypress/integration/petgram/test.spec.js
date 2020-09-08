/* global describe, it, cy, Cypress */
describe('My first test', () => {
    it('Try if app works', () => {
        cy.visit('/');
    });

    it('Navigate to a category and see photos', () => {
        cy.visit('/pet/1');
        cy.get('article');
    });

    it('Can navigate to Home using the navbar', () => {
        cy.visit('/pet/1');
        cy.get('nav a').first().click();
        cy.url().should('eq', Cypress.config().baseUrl);
    });

    it('No authenticated users see two forms when go to favorites page (register and login)', () => {
        cy.visit('/favs');
        cy.get('form').should('have.length', 2);
    });
});
