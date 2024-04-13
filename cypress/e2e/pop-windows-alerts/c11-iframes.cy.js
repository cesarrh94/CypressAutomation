/// <reference types="Cypress"/>

context('Working with iFrames', () => {

  // an iFrame is used to embed a html document into another html document
  specify('should understand how to work with iFrame', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#courses-iframe').then((frame) => {
      const searchField = frame.contents().find('input[id="search"]')
      cy.wrap(searchField).type('selenium')
    })

    // working outside the iframe
    cy.get('#name').type('outside de iframe')
  })
})