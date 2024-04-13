/// <reference types="Cypress"/>

context('how to handle dropdown elements', () => {

    specify('using select method to handle dropdown elements', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // only the elements with the select tag will works with the select command

        // select value
        cy.get('#carselect').select('bmw')

        // select multiple values

        // this particular element does not support multiple select throwing an exception.
        // cy.get('#carselect').select(['benz', 'bmw'])
        cy.get('#multiple-select-example').select(['apple', 'peach'])

        // select value with options
        cy.get('#carselect').select('benz', { force: true })

    })
})