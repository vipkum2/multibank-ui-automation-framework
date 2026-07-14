const {
    MarketingHomePage,
    INTERNAL_NAV_LINKS,
    EXTERNAL_NAV_LINKS
} = require('../../pages/MarketingHomePage');

const marketingHomePage = new MarketingHomePage();
describe('Negative / Edge Cases', () => {

    it('should display Page Not Found for an invalid route', () => {
        cy.visit('/this-page-does-not-exist', {
            failOnStatusCode: false
        });
        cy.location('pathname')
            .should('eq', '/this-page-does-not-exist');
        cy.contains('Page Not Found')
            .should('be.visible');
    });
    it('should verify navigation links are not broken', () => {
        cy.visit(Cypress.env('marketingSiteUrl'));
            INTERNAL_NAV_LINKS.forEach(link => {
                cy.request({
                    url: `${Cypress.env('marketingSiteUrl')}${link.href}`,
                    //failOnStatusCode: false
                }).then(response => {
                    expect(response.status).to.eq(200);
                });
            });
            EXTERNAL_NAV_LINKS.forEach(link => {
                cy.request({
                    url: link.href,
                    //failOnStatusCode: false
                }).then(response => {
                    expect(response.status).to.be.oneOf([200, 301, 302]);
                });

            });

    });
    it('should render correctly on a mobile viewport', () => {
        cy.viewport('iphone-x');
        cy.visit(Cypress.env('marketingSiteUrl'));

        marketingHomePage.verifyLoaded();
        marketingHomePage.verifyMobileMenu();
        marketingHomePage.verifyMobileLayout();

    });

});