describe('forms Test', () => {
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('Test subscribe form',()=>{
        cy.contains(/testing forms/i).should('be.visible')
    })

})