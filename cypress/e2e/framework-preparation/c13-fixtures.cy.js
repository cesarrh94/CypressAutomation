/// <reference types="Cypress"/>

context('fixtures demo', () => {

  let globalData

  before('before hook', () => {
    cy.log('before hook')
    cy.fixture('letskodeit').then((data) => {
      globalData = data
    })
  })

  specify('should understand how to use fixtures to reading data', () => {
    cy.visit('https://www.letskodeit.com/login')
    cy.get('#email').type(globalData.test_case_1.username)
    cy.get('#login-password').type(globalData.test_case_1.password)
  })
})