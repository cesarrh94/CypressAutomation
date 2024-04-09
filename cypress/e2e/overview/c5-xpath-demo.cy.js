/// <reference types="Cypress"/>

describe('Cypress xpath demo', () => {
    it('should verify xpath capabilities', () => {
        cy.visit('https://www.letskodeit.com/courses')

        cy.xpath('//input[@id="search"]').type('test')
    })
})