//const MarketingHomePage = require('../../pages/MarketingHomePage');
const {
    MarketingHomePage,
    INTERNAL_NAV_LINKS,
    EXTERNAL_NAV_LINKS
} = require('../../pages/MarketingHomePage');
const marketingHomePage = new MarketingHomePage();

describe('Public Navigation', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('marketingSiteUrl'));
  });

  it('should display all navigation menu items', () => {
      marketingHomePage.verifyLoaded();
      marketingHomePage.verifyNavigationVisible();
      marketingHomePage.verifyNavigationItems();

  });

  INTERNAL_NAV_LINKS.forEach(link => {
    it(`should navigate to ${link.text}`, () => {
        marketingHomePage.clickNavigationItem(link.text);
        marketingHomePage.verifyCurrentPath(link.href);
    });
  });
  EXTERNAL_NAV_LINKS.forEach(link => {
    it(`should verify '${link.text}' navigation`, () => {
      marketingHomePage.verifyExternalNavigationLink(
                link.text,
                link.href,
                link.target
      )
    })  
  });

  it.skip('should have correct navigation links', () => {
      marketingHomePage.verifyLoaded();
      marketingHomePage.verifyNavigationLinks();    
  });

  it.skip('should navigate to Explore page', () => {
    marketingHomePage.clickNavigationItem('Explore');
    marketingHomePage.verifyCurrentPath('/en/explore');
  });
  it.skip('should navigate to Features page', () => {
    marketingHomePage.clickNavigationItem('Features');
    marketingHomePage.verifyCurrentPath('/en/features');
  });

  it('should display desktop navigation at 1440x900', () => {
    cy.viewport(1440, 900);
    marketingHomePage.verifyLoaded();
    marketingHomePage.verifyNavigationVisible();

  });
}); 