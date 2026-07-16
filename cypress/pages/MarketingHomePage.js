const SELECTORS = Object.freeze({
    navigation: 'nav[aria-label="Main"]',
    navigationLinks: 'nav[aria-label="Main"] a',
    downloadAppButton: '[data-button-type="download"]',
    openAccountButton: 'a[href*="register"]'
});

const HERO_CONTENT = Object.freeze({
    heading: 'Crypto for everyone',
    description: 'Simple, secure and speedy.'
});
const HERO_ACTIONS = Object.freeze({
    download: {
        text: 'Download the app',
        href: 'go.link'
    },
    openAccount: {
        text: 'Open an account',
        href: 'trade.mb.io/register'
    }
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
    { text: 'Explore', href: '/explore' },
    { text: 'Features', href: '/features' },
    { text: 'OTC Desk', href: '/features/otc-desk' },
    { text: 'Company', href: '/company' },
    { text: 'Support', href: '/support' }
]);

const EXTERNAL_NAV_LINKS = Object.freeze([
    {
        text: '$MBG',
        href: 'https://token.multibankgroup.com',
        target: '_blank'
    }
]);

class MarketingHomePage {
    verifyLoaded() {
        cy.url().should('include', 'mb.io');
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
        .should('have.attr', 'target', expectedTarget)
        .invoke('attr', 'href')
        .should('include', expectedHref);

  }
    verifyCurrentPath(expectedPath) {
      cy.location('pathname')
        .should('include', expectedPath);
  }

  verifyHeroBanner() {
    cy.contains('h3', HERO_CONTENT.heading)
      .should('be.visible');

    cy.contains('p', HERO_CONTENT.description)
      .should('be.visible');

  }

  verifyHeroCallToActions() {
    cy.get(SELECTORS.downloadAppButton)
      .should('contain.text', HERO_ACTIONS.download.text)
      .and('have.attr', 'href')
      .and('include', HERO_ACTIONS.download.href);

    cy.get(SELECTORS.openAccountButton)
      .should('contain.text', HERO_ACTIONS.openAccount.text)
      .and('have.attr', 'href')
      .and('include', HERO_ACTIONS.openAccount.href);
  }
  verifyDownloadAppLink() {
    cy.get(SELECTORS.downloadAppButton)
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel')
      .and('include', 'noopener');

    cy.get(SELECTORS.downloadAppButton)
      .should('have.attr', 'href')
      .then(href => {
          expect(href).to.contain('go.link');
        });
  }
  verifyMobileLayout() {
    cy.get('header')
        .should('be.visible');
    cy.contains('Crypto for everyone')
        .should('be.visible');
    cy.contains('Download the app')
        .should('be.visible');
    cy.contains('Open an account')
        .should('be.visible');
  }
  verifyMobileMenu() {
    cy.get('button[aria-label*="menu"]')
        .should('be.visible');
  }
}

//module.exports = MarketingHomePage;
module.exports = {
    MarketingHomePage,
    INTERNAL_NAV_LINKS,
    EXTERNAL_NAV_LINKS
};