describe('Help students on home screen', function() {
    it('Visits the Hobsons website ', function() {
        cy.fixture('constants')
        .then((constants) => {
        //Visit the Website
        cy.visit(constants.HobsonsWebsite)
        cy.get('#logo > a')
    })
})
  
    it ('Actions on home screen', function(){
        // Assertion on 'We help Students'
        cy.get('h1 > strong').should('be.visible')
        //Click on the down-arrow
        cy.get('.fas').click()
        // Should add visual testing here
        cy.get('#section-learn-more > h2').contains('How can we help your students')
        cy.get('#section-learn-more > h2').should('have.css','text-align','center')
    }) 
}) 