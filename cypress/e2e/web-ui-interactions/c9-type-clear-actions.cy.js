/// <reference types="Cypress"/>

context('type and clear demo', () => {

    specify('using type and clear actions commands', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // type and clear examples
        // syntax 1
        cy.get('#name').type("type one")

        // syntax 2 with options
        // force
        cy.get('#disabled-button').click()
        cy.get('#enabled-example-input').type('type two', { force: true })

        // delay
        cy.get('#name').clear()
        cy.get('#name').type('type three', { delay: 1000 })
        cy.get('#name').clear()

        // parseSpecialCharSequence : true (by default)
        cy.get('#name').clear()
        cy.get('#name').type('type four{backspace}')
        cy.wait(2000)
        cy.get('#name').type('{selectAll}')
        cy.wait(2000)
        cy.get('#name').type('{backspace}', { parseSpecialCharSequences: true })
    })
})