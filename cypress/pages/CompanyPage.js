const SELECTORS = Object.freeze({
    heading: 'h1',
    description: 'h2'
});

const PAGE_CONTENT = Object.freeze({
    heading: 'Why MultiBank Group?',
    description: 'For nearly two decades'
});

const COMPANY_STATS = Object.freeze([
    '$2 trillion',
    '2,000,000+',
    '25+'
]);

const CORE_SECTIONS = Object.freeze([
    {
        heading: 'A tradition of global leadership'
    },
    {
        heading: 'Innovation with purpose'
    },
    {
        heading: 'Integrity built into every decision'
    }
]);

const TRUST_FEATURES = Object.freeze([
    'Regulation at our core',
    'Proven track record',
    'Secure & trusted'
]);

const COMMUNITY_SECTION = Object.freeze({
    heading: 'Community & Media'
});

class CompanyPage {
    verifyPageLoaded() {
        cy.location('pathname')
            .should('include', '/company');
    }
    verifyHeroSection() {
        cy.contains(SELECTORS.heading, PAGE_CONTENT.heading)
            .should('be.visible');
        cy.contains(SELECTORS.description, PAGE_CONTENT.description)
            .should('be.visible');
    }
    verifyStatistics() {
        COMPANY_STATS.forEach(stat => {
            cy.contains(stat)
                .should('be.visible');
        });
    }
    verifyCoreSections() {
        CORE_SECTIONS.forEach(section => {
            cy.contains(section.heading)
              .should('be.visible');
        });
    }
    verifyTrustFeatures() {
        TRUST_FEATURES.forEach(feature => {
            cy.contains(feature)
              .scrollIntoView()
              .should('be.visible');
        });
    }
    verifyCommunitySection() {
        cy.contains(COMMUNITY_SECTION.heading)
          .scrollIntoView()
          .should('be.visible');
    }
}

module.exports = CompanyPage;