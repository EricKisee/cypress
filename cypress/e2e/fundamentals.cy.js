describe('Fundamentals Test', () => {
  beforeEach(() => {cy.visit('/fundamentals')})
  it('Contains correct header text', () => {
    // cy.visit('/fundamentals')

    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })

// it.only() will run only this test

  it('Accordion works correctly', () => {
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')

  })
})