/// <reference types="Cypress" />
 
it('should show tab2', () => {
    cy.visit('/');
    cy.get('#tab-button-tab2').click();
});