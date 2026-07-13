const SELECTORS = Object.freeze({
    navigation: 'nav[aria-label="Main"]',
    menuItems: 'nav[aria-label="Main"] a'
});

class NavigationComponent {
    getNavigation() {
        return cy.get(SELECTORS.navigation);
    }
    getMenuItems() {
        return cy.get(SELECTORS.menuItems);
    }
    verifyVisible() {
        this.getNavigation()
            .should('be.visible');
    }
    verifyExpectedItems(expectedItems) {
        expectedItems.forEach(item => {
            this.getNavigation()
                .contains('a', item)
                .should('be.visible');

        });
    }
}

module.exports = NavigationComponent;