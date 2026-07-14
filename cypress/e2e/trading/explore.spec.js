const LoginPage = require('../../pages/LoginPage');
const {MarketingHomePage} = require('../../pages/MarketingHomePage');
const {ExplorePage, MARKET_CATEGORIES} = require('../../pages/ExplorePage');

const loginPage = new LoginPage();
const marketingHomePage = new MarketingHomePage();
const explorePage = new ExplorePage();

describe('Explore Market', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('marketingSiteUrl'));
        marketingHomePage.verifyLoaded();
        marketingHomePage.clickNavigationItem('Explore');
        explorePage.verifyPageLoaded();
    });

    it('should render Spot Market section with trading pairs', () => {

        explorePage.verifyPageLoaded();
        explorePage.verifyMarketTableVisible();
        explorePage.verifyTradingPairsExist();

    });

    MARKET_CATEGORIES.forEach(category => {
        it(`should display trading pairs for ${category}`, () => {
            explorePage.selectMarketCategory(category);
            explorePage.verifyTradingPairsExist();
        });

    });
    
    it('should display the expected data fields for a trading pair', () => {
        explorePage.verifyTradingPairStructure();
    });

    it('should navigate to BTC trading pair details page', () => {
        explorePage.clickTradingPair('BTC');
        explorePage.verifyTradingPairDetailsPage('BTC');
    });

});