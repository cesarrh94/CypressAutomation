/// <reference types="Cypress"/>

describe('get method access and css examples', () => {

    it('should learn get() method and some css examples', () => {
        // visit a page 
        cy.visit('https://www.letskodeit.com/practice')

        // tag name
        cy.get('button')

        // id
        cy.get('#name')

        // class name
        cy.get('.inputs')

        // attribute value
        cy.get('[placeholder="Enter Your Name"]')

        // class value
        cy.get('[class="btn-style class1 class2"]')

        // tag name and attributes value
        cy.get('input[id="name"]:visible')

        // tag name and multiple attribute values
        cy.get('input[id="name"][placeholder="Enter Your Name"]')

        // should attr / invoke alternative

    })
})