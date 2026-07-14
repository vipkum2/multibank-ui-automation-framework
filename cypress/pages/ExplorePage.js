const SELECTORS = Object.freeze({
    marketTable: 'table',
    marketRows: 'tbody tr',
    assetLinks: 'tbody tr td:first-child a',
    categoryButtons: 'button',
    spotMarketTable: 'table',
    tradingPairLink: 'tbody tr td:first-child a',
    tradingPairSymbol: 'tbody tr td:first-child a span:first-child',
    tradingPairName: 'tbody tr td:first-child a span:last-child'
});

const MARKET_CATEGORIES = Object.freeze([
    'Hot',
    'Gainers',
    'Losers'
]);

class ExplorePage {
    verifyPageLoaded() {
        cy.url().should('include', '/explore');
    }
    verifyMarketTableVisible() {
        cy.get(SELECTORS.marketTable)
            .should('be.visible');
    }
    verifyTradingPairsExist() {
        cy.get(SELECTORS.marketRows)
            .should('have.length.greaterThan', 0);
    }
    clickNavigationItem(itemText) {
        cy.get(SELECTORS.navigation)
            .contains('a', itemText)
            .should('be.visible')
            .click();

        cy.location('pathname')
            .should('not.eq', '/en');
    }
    verifyMarketCategoryVisible(category) {
        cy.contains(SELECTORS.categoryButtons, category)
            .should('be.visible');
    }
    selectMarketCategory(category) {
        cy.contains(SELECTORS.categoryButtons, category)
            .should('be.visible')
            .click();
    }
    verifyTradingPairStructure() {
        cy.get(SELECTORS.marketRows)
            .first()
                .within(() => {
                    cy.get('td').should('have.length.at.least', 4);
                    //Trading Pair
                    cy.get('a')
                      .should('have.attr', 'href');

                    cy.get('img')
                      .should('be.visible');

                    cy.get('span')
                      .first()
                      .should('not.be.empty');

                    cy.get('span')
                      .eq(1)
                      .should('not.be.empty');

                    // Price
                    cy.get('td').eq(1)
                      .should('not.be.empty');

                    // 24h Change
                    cy.get('td').eq(2)
                      .should('not.be.empty');

                    // 7d Chart
                    cy.get('td').eq(3)
                      .should('not.be.empty');
                });
    }
    clickTradingPair(symbol) {
        cy.get(SELECTORS.marketRows)
          .contains('span', symbol)
          .should('be.visible')
          .click();

    }
    verifyTradingPairDetailsPage(symbol) {
        cy.url().should('include', `/explore/${symbol}`);

    }
}

module.exports = { ExplorePage, MARKET_CATEGORIES }