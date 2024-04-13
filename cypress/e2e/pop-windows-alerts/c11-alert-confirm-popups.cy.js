/// <reference types="Cypress"/>

context('Working with window tabs, popups and frames', () => {

  // skipping the test
  specify.skip('should understand how to handle alert popup', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#alertbtn').click()

    // check the catalog of event --> window:alert
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Hello , share this practice page and share your knowledge')
    })

  })

  specify.skip('should understand how to confirm alert popup', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('Hello , Are you sure you want to confirm?')
      return true
    })

    // cy.on('window:confirm', () => true)
  })

  specify('should understand how to handle confirm popup cancel', () => {
    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('Hello , Are you sure you want to confirm?')
      return false
    })

    // cy.on('window:confirm', () => false)
  })

})