/// <reference types="Cypress"/>

context('child tabs demo', () => {

  specify.skip('verify href attribute', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#opentab')
      .should('have.attr', 'href')
      .and('contain', '/courses')
  })


  specify.skip('should visit the new tab, removing target attribute', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.url().should('contain', '/courses')

    cy.get('input[id="search"]').type('selenium')
    cy.get('button[class="find-course search-course"]').click()
  })


  specify('should visit the new tab, without removing target attribute', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#opentab').then(newTab => {
      const hrefTab = newTab.prop('href')

      cy.visit(hrefTab)
      cy.url().should('contain', '/courses')

      cy.get('input[id="search"]').type('selenium')
      cy.get('button[class="find-course search-course"]').click()
    })

    cy.go('back')
  })
})