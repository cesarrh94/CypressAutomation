/// <reference types="Cypress"/>

context('Send empty data and handle uncaught exceptions', () => {

  specify('should understand how to handle uncaught exceptions', () => {
    cy.visit('https://www.letskodeit.com/login')

    // cy.get('#email').type('')
    cy.get('#login').click()

    /* check out for the cypress section on the uncaught exception on the support.s file of cypress. */

  })
})