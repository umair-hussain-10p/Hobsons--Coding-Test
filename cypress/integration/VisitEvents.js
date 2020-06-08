describe('Actions on Hamburger', function() {
    it ('Visits the Hobsons website ', function() {
        cy.fixture('constants')
        .then((constants) => {
        //Visit the Website
        cy.visit(constants.HobsonsWebsite)
        //Assert the logo or title
        cy.get('#logo > a').should('have.attr', 'href', constants.HobsonsWebsite)
        })
    })

    it ('Actions on Hamberger option', function(){
        var dropdownlist = ['Solutions','Services','About','Blog']
        //Click on the hamburger
        cy.get('.menu').click();
        //Assert Solutions, Services and About & Blog
        dropdownlist.forEach(menu => {
            cy.get('nav ul li').should('contain',menu)
        })
        //Assert the sublist and Click Resources
        cy.get('nav ul li').contains('Resources').click();
        //Assertion of child-list of Resourcens 
        cy.get('ul.expand').should('be.visible');
        //Click events on the chlid-list of Resrouces 
        cy.get('ul.expand > li').contains('Events').click();
    })

    it ('Assertion of all events in the current year (2020) Events page', function() {
        var subdropdownlist = ['FADSS Winter Leadership Conference','ERDI Winter 2020','AASA NCE 2020','TASA 2020','ERDI Summer 2020']
        var number = ['2','6','7','8','10']
        var i;
        subdropdownlist.forEach(menu => {
            cy.get('#articles .txt > h4 > a').should('contain',menu)
        })
    })
})