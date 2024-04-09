/// <reference types="Cypress"/>

context('internet-app exploratory testing with cypress', () => {

    specify('using cypress selector playground', () => {
        cy.visit('http://the-internet.herokuapp.com/')
    })
})