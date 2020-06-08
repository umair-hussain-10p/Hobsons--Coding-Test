describe('Actions on Hamburger', function () {
    beforeEach(() => {
        cy.fixture('constants')
            .then((constants) => {
                //Visit the Website
                cy.visit(constants.HobsonsWebsite)
                //Assert the logo or title
                cy.get('#logo > a').should('have.attr', 'href', constants.HobsonsWebsite)
            })
    })

    it('Actions on Hamberger option', function () {
        //Click on the hamburger
        cy.get('.menu').click();
        //Assert Solutions, Services and About & Blog
        var dropdownlist = ['Home', 'Solutions', 'Services', 'Resources', 'Careers', 'About', 'Blog']
        dropdownlist.forEach(menu => {
            cy.get('nav ul li').should('contain', menu)
        })
        //Click Resources and assert the sublist 
        cy.get('nav ul li').contains('Resources').click();
        //Assertion of child-list of Resourcens 
        var ResrouceDropdownList = ['All', 'Webinars', 'Case Studies', 'White Papers', 'Blog', 'Media', 'Podcast']
        ResrouceDropdownList.forEach(menus => {
            cy.get('ul.expand > li').should('contain', menus)//.contains(menus)//
        })
        //Click events on the chlid-list of Resrouces 
        cy.get('ul.expand > li').contains('Events').click();
    })

    it('Assertion of all events in the current year (2020) Events page', function () {
        cy.get('.menu').click();
        cy.get('nav ul li').contains('Resources').click();
        cy.get('ul.expand > li').contains('Events').click();
        var subdropdownlist = ['FADSS Winter Leadership Conference', 'ERDI Winter 2020', 'AASA NCE 2020', 'TASA 2020', 'ERDI Summer 2020']
        subdropdownlist.forEach(menu => {
            cy.get('#articles .txt > h4 > a').should('contain', menu) && cy.get('#articles .txt > p').contains('2020');
        })
    })
})