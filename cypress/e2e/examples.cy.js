describe('Various Examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('multi-page testing', () => {
        cy.getDataTest('nav-item-why-cypress').click()
        cy.location('pathname').should('eq', '/')

        cy.getDataTest('nav-item-overview').click()
        cy.location('pathname').should('eq', '/overview')
        
        cy.getDataTest('nav-item-fundamentals').click()
        cy.location('pathname').should('eq', '/fundamentals')
        
        cy.getDataTest('nav-item-forms').click()
        cy.location('pathname').should('eq', '/forms')
        
        cy.getDataTest('nav-item-component').click()
        cy.location('pathname').should('eq', '/component')
        
        cy.getDataTest('nav-item-best-practices').click()
        cy.location('pathname').should('eq', '/best-practices')
        
        // cy.getDataTest('nav-item-examples').click()
        // cy.location('pathname').should('eq', '/examples')
    })

    it('intercepts', () => {
        cy.intercept('POST', '/examples', {
            // body: {message: 'Successfully intercepted request'},
            fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })

    it.only('grudges', ()=>{
        cy.contains(/add some grudges/i)

        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 0)
        })

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('First Grudge')
        })

        cy.getDataTest('add-grudge-button').click()
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 1)
        })

    })
})