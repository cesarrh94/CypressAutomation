/// <reference types="Cypress"/>

context('within command demo', () => {

    specify('using within command', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button')

        /* within command: scope all subsequent cy commands to within this element. Useful when working within a particular group of elements. */

        /* In order to perform action on the element in the parent element, we have to do it inside the within block function. */

        cy.get('#open-window-example-div').within(() => {
            cy.get('button').click()
        }).should('have.id', 'open-window-example-div')


    })
})