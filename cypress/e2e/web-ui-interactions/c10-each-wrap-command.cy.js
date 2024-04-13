/// <reference types="Cypress"/>

context('working with list element', () => {

    specify('each and wrap command for a loop', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // each is the syntax for a for-loop
        cy.get('[class^="btn-style class1"]').each((el, index, $list) => {
            const itemText1 = el.text().trim()
            cy.wrap(el).should('contain', itemText1)
        })

        cy.get('#autosuggest').then(autoListInput => {
            cy.wrap(autoListInput).type('automation')

            cy.get('[class="ui-corner-all"]').each((el, index, $list) => {
                const itemText2 = el.text().trim()
                cy.wrap(el).should('contain', itemText2)

                if (index < 8) {
                    cy.wrap(el).should('have.class', 'ui-corner-all')
                }
            }).then(($list) => {
                expect($list).to.have.length(8)
            })
        })
    })
})