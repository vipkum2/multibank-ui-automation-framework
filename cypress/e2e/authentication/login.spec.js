const LoginPage = require('../../pages/LoginPage');
const loginPage = new LoginPage();

describe('Authentication - Login Page', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('should navigate to the public homepage via the application logo', () => {
        loginPage.verifyPageLoaded();
        loginPage.navigateToMarketingSite();

        //cypress supports cross-orgin with cy.origin()
        cy.origin(Cypress.env('marketingSiteUrl'), () => {
            cy.url().should('include', 'mb.io');
        });

    });

});