/// <reference types="Cypress"/>

context('No Framework Test Suite', () => {

  let globalData

  before(() => {
    cy.fixture('user-lk').then((data) => {
      globalData = data
    })
  })

  specify('should login to app using valid credentials', () => {
    cy.visit('https://www.letskodeit.com/login')
    cy.get('#email').type(globalData.email)
    cy.get('#login-password').type(globalData.password)
    cy.get('#login').click()
    cy.get('#dropdownMenu1').should('exist')
    cy.get('#dropdownMenu1').click()
    cy.contains('Logout').click()
  })

  specify('should not login to app using empty username', () => {
    cy.visit('https://www.letskodeit.com/login')
    cy.get('#login-password').type(globalData.password)
    cy.get('#login').click()
    cy.get('.error').should('exist')
  })

  specify.skip('should login to app using invalid username/password combination', () => {
    cy.visit('https://www.letskodeit.com/login')
  })
})