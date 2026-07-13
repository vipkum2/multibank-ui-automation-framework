const SELECTORS = Object.freeze({
  heroSection: 'section',
});

class HomePage {

  verifyPageLoaded() {
    cy.url().should('include', 'mb.io/en');
  }

}

module.exports = HomePage;