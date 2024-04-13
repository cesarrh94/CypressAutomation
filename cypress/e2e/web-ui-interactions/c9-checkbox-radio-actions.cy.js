/// <reference types="Cypress"/>

context('checkboxes and radio buttons action commands', () => {

    specify('using actions on checkboxes and radio buttons', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // checkboxes
        // check all checkboxes
        //cy.get('div#checkbox-example-div input[type="checkbox"]').check()

        // uncheck all checkboxes
        //cy.get('div#checkbox-example-div input[type="checkbox"]').uncheck()

        // check bmw checkbox
        // cy.get('div#checkbox-example-div input[type="checkbox"]').check('bmw')
        // cy.wait(2000)

        // uncheck bmw checkbox
        // cy.get('div#checkbox-example-div input[type="checkbox"]').uncheck('bmw')

        // check multiple checkboxes
        cy.get('div#checkbox-example-div input[type="checkbox"]')
            .check(['bmw', 'benz'])
        cy.wait(2000)

        // uncheck multiple checkboxes
        cy.get('div#checkbox-example-div input[type="checkbox"]')
            .uncheck(['bmw', 'benz'])

        // radio buttons
        // check all radio buttons
        cy.get('div#radio-btn-example input[type="radio"]').check()

        // check a radio button
        cy.get('div#radio-btn-example input[type="radio"]').check('benz')

    })
})