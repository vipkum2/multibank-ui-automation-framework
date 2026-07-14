const MarketingHomePage = require('../../pages/MarketingHomePage').MarketingHomePage;
const CompanyPage = require('../../pages/CompanyPage');

const marketingHomePage = new MarketingHomePage();
const companyPage = new CompanyPage();

describe('Company Page -> Why Multibank ?', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('marketingSiteUrl'));
        marketingHomePage.verifyLoaded();
        marketingHomePage.clickNavigationItem('Company');
        companyPage.verifyPageLoaded();

    });

    it('should render Why MultiBank page with expected hero content', () => {
        companyPage.verifyHeroSection();
    });

    it('should display company statistics', () => {
        companyPage.verifyStatistics();
    });
    
    it('should display company core sections', () => {
        companyPage.verifyCoreSections();
    });

    it('should display trust features', () => {
     companyPage.verifyTrustFeatures();
    });

    it('should display community section', () => {
        companyPage.verifyCommunitySection();
    });

});