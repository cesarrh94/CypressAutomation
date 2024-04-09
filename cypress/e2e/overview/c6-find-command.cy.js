/// <reference types="Cypress"/>

context('find command', () => {

    specify('using find command', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button')

        // within returns the same subject it receives
        cy.get('#open-window-example-div').within(() => {
            cy.get('button').click()
        }).should('have.id', 'open-window-example-div')

        /* find command: get the descendant DOM elements of a specific selector. it most used with chain commands.*/
        // find returns the subject if finds
        cy.get('#open-window-example-div').find('button').should('have.id', 'openwindow')
        cy.get('#open-window-example-div').find('button', { log: false }).click()
        cy.get('#open-window-example-div').find('button', { timeout: 12000 })
    })
})