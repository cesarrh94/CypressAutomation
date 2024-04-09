/// <reference types="Cypress"/>

context('click actions demo', () => {

    specify('how to click on elements - multiple ways', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // default: click on the center of the element
        /* cy.get('#opentab').click()
        cy.get('#opentab').click('left')
        cy.get('#opentab').click('right')
        cy.get('#opentab').click('top')
        cy.get('#opentab').click('topLeft')
        cy.get('#opentab').click('topRight')
        cy.get('#opentab').click('bottom')
        cy.get('#opentab').click('bottomLeft')
        cy.get('#opentab').click('bottomRight') */

        // .click() accepts an x and y coordinates
        /* cy.get('#opentab').click(2, 3)
        // double click on different coordinates
        cy.get('#opentab').click(2, 3).click(10, 25) */

        // ignore checking error
        /* cy.get('#hide-textbox').click()
        cy.get('#displayed-text').click()
        cy.get('#displayed-text').click({ force: true }) */

        // click on multiple elements
        cy.get('input[type="checkbox"][name="cars"]').click({ multiple: true })

        // scroll behavior
        cy.get('#mousehover').click({ scrollBehavior: 'top' })

    })
})