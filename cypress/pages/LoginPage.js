const SELECTORS  = Object.freeze({
  logo: 'a[href="https://mb.io/"]',
  loginHeading: 'h1',
  emailInput: 'input[type="email"]',
  passwordInput: 'input[type="password"]'
});

class LoginPage {
  visit() {
    cy.visit('/login?next=%2F');
  }
  verifyPageLoaded() {
    cy.url().should('include', '/login');
    cy.contains('Log In').should('be.visible');
    cy.get('form').should('be.visible');
  }
  navigateToMarketingSite() {
    cy.get(SELECTORS.logo).click();
  }
}

module.exports = LoginPage;