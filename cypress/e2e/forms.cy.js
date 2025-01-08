describe('forms Test', () => {
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('Test subscribe form',()=>{
        cy.contains(/testing forms/i).should('be.visible')
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.contains(/successfully subbed/i).should('not.exist')
        cy.get('@subscribe-input').type('erickiseemulwa@gmail.com')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/successfully subbed/i).should('be.visible')
        cy.wait(3000)
        cy.contains(/successfully subbed/i).should('not.exist')

        // invalid email test
        cy.get('@subscribe-input').type('erickiseemulwa')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email/i).should('be.visible')
        cy.wait(3000)
        cy.contains(/invalid email/i).should('not.exist')

        // empty email test
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail/i).should('be.visible')
    })

})