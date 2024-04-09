/// <reference types="Cypress"/>

context('get command details', () => {

    specify('get commands details', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button', { log: true })
        // It will disable/enable command output on the console
        cy.get('button', { log: false })

        // time to wait before throwing an exception
        cy.get('input', { timeout: 10000 })

        // specifies the node from where the element search should start
        // cy.get('input')


    })
})