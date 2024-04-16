/// <reference types="Cypress"/>

context('fixtures multiple data demo', () => {

  let globalData

  before('before hook', () => {
    cy.log('before hook')
    cy.fixture('demo').then((data) => {
      globalData = data
    })
  })

  specify('should run same test with multiple data', () => {

    globalData.tc001.forEach(testData => {

      cy.visit('https://www.letskodeit.com/courses')

      cy.get('input[placeholder="Search Course"]')
        .type(testData.search_course)

      cy.get('button[class="find-course search-course"]').click()

      cy.xpath('//h4[normalize-space()="{course_name}"]'
        .replace('{course_name}', testData.click_course))
        .click()
    })

  })
})