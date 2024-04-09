/// <reference types="Cypress"/>

context('assertion commands', () => {

    specify('walkthrough on assertions', () => {
        cy.visit('https://www.letskodeit.com/practice')

        /* Assertions validates the state of elements or any action we performed on the application we are testing. Assertions verify whether the element is visible or has a particular state. 
        
        types of assertion in Cypress:
        1. implicit subject assertion: is used on the object provided by the parent command. for example: should() & and() commands acts on the subject returned by the previous command.

        when to use?
        * assert multiple validations on the same element/subject.
        * change the subject before making assertions

        2. explicit subject assertion: is when a subject is needed before performing assertion, for example: expect() and assert() commands.
        
        when to use?
        perform some custom logic before making the assertions. */

        // example of implicit subject assertion
        /* cy.get('#product')
            .should('have.class', 'table-display')
            .and('be.visible')
            .find('tbody tr:nth-child(2)')
            .find('td')
            .last()
            .should('contain', '35')
            .and('have.text', '35')
            .and('have.class', 'price') */

        // example of explicit subject assertion
        let firstText
        let secondText

        cy.get('#product')
            .find('tbody tr:nth-child(2)')
            .find('td')
            .first()
            .then(($first) => {
                firstText = $first.text()
            })

        cy.get('#product')
            .find('tbody tr:nth-child(3)')
            .find('td')
            .first()
            .then(($second) => {
                secondText = $second.text()
                expect(secondText, "verify first and second text")
                    .to.equal(firstText)
            })
    })
})