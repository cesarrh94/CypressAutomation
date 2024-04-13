/// <reference types="Cypress"/>

context('trigger command demo', () => {

    specify('using trigger command', () => {
        /* cy.visit('https://www.letskodeit.com/practice')

        // trigger focus and click
        cy.get('#hide-textbox').trigger('focus', 20, 40, { force: true })
        cy.get('#hide-textbox').trigger('click', 20, 40, { force: true })

        // trigger mouseover
        // hover example with css
        cy.get('#mousehover').trigger('mouseover')
        // hover example with javascript
        // cy.get('div.mouse-hover-content a[href="#top"]').click()
        cy.get('div.mouse-hover-content a[href="#top"]').click({ force: true }) */

        // amazon mouseover
        /* cy.visit('https://www.amazon.com')
        cy.get('#nav-link-accountList').trigger('mouseover') */

        // ebay mouseover
        /* cy.visit('https://www.ebay.com')
        cy.get('#gh-eb-My').trigger('mouseover') */

        // flipkart mouseover
        cy.visit('https://www.flipkart.com')
        cy.get('div.H6-NpN _3N4_BX').trigger('mouseover')
    })
})