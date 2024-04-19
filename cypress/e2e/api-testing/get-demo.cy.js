/// <reference types="Cypress"/>

describe('Cypress API Automation Testing - Get Method Demo', () => {

  it('should understand how to execute a get request', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': 'Bearer d2c93bcb47b332fc990b2728f29d43dc7769bfad4f9c4ddf54f6bf86793da72e'
      }
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.be.equal(200)
      expect(response.body[0]).has.property('name', 'Kannen Bhat')
    })
  })

})