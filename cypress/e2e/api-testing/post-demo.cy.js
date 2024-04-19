/// <reference types="Cypress"/>

describe('Cypress API Automation Testing - Post Method Demo', () => {

  let globalData

  before('this is before hook', () => {
    cy.fixture('users-data').then((data) => {
      globalData = data
    })
  })

  it.skip('should understand how to execute a post request', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': 'Bearer d2c93bcb47b332fc990b2728f29d43dc7769bfad4f9c4ddf54f6bf86793da72e'
      },
      body: {
        name: "testuser",
        gender: "male",
        email: "test@testmail.com",
        status: "active"
      }
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.be.equal(201)
      expect(response.body.name).to.be.equal('testuser')
      expect(response.body.email).to.be.equal('test@testmail.com')
    })
  })


  it.skip('should understand how to execute a post request - request variable', () => {

    const requestBody = {
      name: "testuser2",
      gender: "female",
      email: "test2@testmail.com",
      status: "active"
    }

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': 'Bearer d2c93bcb47b332fc990b2728f29d43dc7769bfad4f9c4ddf54f6bf86793da72e'
      },
      body: requestBody
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.be.equal(201)
      expect(response.body.name).to.be.equal('testuser2')
      expect(response.body.email).to.be.equal('test2@testmail.com')
    })
  })

  it.skip('should understand how to execute a post request - fixture file', () => {

    const requestBody = {
      name: globalData.tid01.name,
      gender: globalData.tid01.gender,
      email: globalData.tid01.email,
      status: globalData.tid01.status
    }

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': 'Bearer d2c93bcb47b332fc990b2728f29d43dc7769bfad4f9c4ddf54f6bf86793da72e'
      },
      body: requestBody
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.be.equal(201)
      expect(response.body.name).to.be.equal(requestBody.name)
      expect(response.body.email).to.be.equal(requestBody.email)
    })
  })

})