/// <reference types="Cypress"/>

context('chain commands demo', () => {

    specify('using chain commands', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button').eq(1).should('contain', 'Open Window')
        cy.get('#openwindow').should('be.visible').and('contain', 'Open Window')
    })
})