const SELECTORS = Object.freeze({
    navigation: 'nav[aria-label="Main"]',
    navigationLinks: 'nav[aria-label="Main"] a'
});

const EXPECTED_NAV_ITEMS = Object.freeze([
    'Explore',
    'Features',
    'OTC Desk',
    'Company',
    'Support',
    '$MBG'
]);

const INTERNAL_NAV_LINKS = Object.freeze([
    { text: 'Explore', href: '/en/explore' },
    { text: 'Features', href: '/en/features' },
    { text: 'OTC Desk', href: '/en/features/otc-desk' },
    { text: 'Company', href: '/en/company' },
    { text: 'Support', href: '/en/support' }
]);

const EXTERNAL_NAV_LINKS = Object.freeze([
    {
        text: '$MBG',
        href: 'https://token.multibankgroup.com/en',
        target: '_blank'
    }
]);

class MarketingHomePage {
    verifyLoaded() {
        cy.url().should('include', 'mb.io/en');
    }
    verifyNavigationVisible() {
        cy.get(SELECTORS.navigation)
            .should('be.visible');
    }
    verifyNavigationItems(expectedItems = EXPECTED_NAV_ITEMS) {
      expectedItems.forEach(item => {
        cy.get(SELECTORS.navigation)
          .contains('a', item)
          .should('be.visible');
      });
    }
    verifyNavigationLinks(expectedLinks = EXPECTED_NAV_LINKS) {
      expectedLinks.forEach(link => {   
        cy.get(SELECTORS.navigation)
            .contains('a', link.text)
            .should('have.attr', 'href', link.href)
        
        if (link.target) {
            cy.get(SELECTORS.navigation)
                .contains('a', link.text)
                .should('have.attr', 'target', link.target);
        }
      });
    }

    clickNavigationItem(itemText) {
      cy.get(SELECTORS.navigation)
        .contains('a', itemText)
        .should('be.visible')
        .click();
    }
    verifyExternalNavigationLink(linkText, expectedHref, expectedTarget = '_blank') {
      cy.get(SELECTORS.navigation)
        .contains('a', linkText)
        .should('be.visible')
        .should('have.attr', 'href', expectedHref)
        .and('have.attr', 'target', expectedTarget);

  }
    verifyCurrentPath(expectedPath) {
      cy.location('pathname')
        .should('eq', expectedPath);
  }
}

//module.exports = MarketingHomePage;
module.exports = {
    MarketingHomePage,
    INTERNAL_NAV_LINKS,
    EXTERNAL_NAV_LINKS
};