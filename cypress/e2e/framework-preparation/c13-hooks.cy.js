/// <reference types="Cypress"/>

context('hooks demo', () => {


  // before() hook, it runs before starting the first test, only once before any test starts.
  before('this is the before hook', () => {
    cy.log('before all tests')
  })

  // after() hook, it runs after completing all test, only once after completing all tests.
  after('this is the after hook', () => {
    cy.log('after all tests')
  })

  // beforeEach() hook, it runs before every test.
  beforeEach('This is the beforeEach hook', () => {
    cy.log('before every test')
  })

  // afterEach() hook, it runs after every test.
  afterEach('This is the afterEach hook', () => {
    cy.log('after every test')
  })

  specify('test 1', () => {
    cy.log('test 1')
  })

  specify('test 2', () => {
    cy.log('test 2')
  })
})