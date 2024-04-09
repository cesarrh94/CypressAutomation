// This line provided intellisense to VSCode for writing Cypress Tests.
/// <reference types="Cypress" />

// describe/context block, it's used to group test cases. It's the equivalent of a Test Suite
describe('My First Test', () => {

    // it/specify block, represented a Test Case.
    it('Verify true is true!', () => {
        // expect is part of the assertion library of Chai, that help us to verify certain actions.
        expect(true).to.equal(true)
    })

    it('Verify true is false', () => {
        expect(true).to.equal(false)
    })
})
