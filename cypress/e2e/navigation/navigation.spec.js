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

  it('should display desktop navigation at 1440x900', () => {
    cy.viewport(1440, 900);
    marketingHomePage.verifyLoaded();
    marketingHomePage.verifyNavigationVisible();
  });

  it('should display hero marketing banner', () => {
    marketingHomePage.verifyHeroBanner();
    marketingHomePage.verifyHeroCallToActions();
  });
  it('should expose a valid app download link', () => {
    marketingHomePage.verifyDownloadAppLink();
  });

}); 