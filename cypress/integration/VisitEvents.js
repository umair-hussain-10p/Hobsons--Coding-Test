describe('Actions on Hamburger', function() {
    it('Visits the Hobsons website ', function() {
        cy.fixture('constants')
        .then((constants) => {
        //Visit the Website
        cy.visit(constants.HobsonsWebsite)
        //Assert the logo or title
        cy.get('#logo > a').should('have.attr', 'href', 'https://www.hobsons.com')
    })
})

    it ('Actions on Hamberger option', function(){
        //Click on the hamburger
        cy.get('.menu').click();
        //Assert Solutions, Services and About & Blog
        cy.get('nav ul li').contains('Solutions')
        cy.get('nav ul li').contains('Services')
        cy.get('nav ul li').contains('About')
        cy.get('nav ul li').contains('Blog')
        //Assert the sublist and Click Resources
        cy.get('nav ul li').contains('Resources').click();
        //Assertion of child-list of Resourcens 
        cy.get('ul.expand').should('be.visible');
        //Click events on the chlid-list of Resrouces 
        cy.get('ul.expand > li').contains('Events').click();
    })

    it ('Assertion of all events in the current year (2020) Events page', function() {
        cy.get('#articles > :nth-child(2) > .txt > h4 > a').contains('FADSS Winter Leadership Conference');
        cy.get('#articles > :nth-child(6) > .txt > h4 > a').contains('ERDI Winter 2020');
        cy.get('#articles > :nth-child(7) > .txt > h4 > a').contains('AASA NCE 2020');
        cy.get('#articles > :nth-child(8) > .txt > h4 > a').contains('TASA 2020');
        cy.get('#articles > :nth-child(10) > .txt > h4 > a').contains('ERDI Summer 2020');
    })
})