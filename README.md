# MultiBank UI Automation Framework

Production-grade UI automation framework built using **Cypress** for the MultiBank QA Automation Assessment.

The framework validates critical user journeys of the MultiBank marketing platform while demonstrating scalable architecture, maintainability, and industry best practices.

---

## Tech Stack

- Cypress 15
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- GitHub

---

## Framework Highlights

- Page Object Model (POM) architecture
- Reusable page components and utilities
- Environment-based configuration
- Independent and deterministic test cases
- Parameterized test data where applicable
- Cross-browser execution support
- Negative and edge-case validation
- Easy to maintain and extend

---

## Project Structure

```text
mb-qa-framework
│
├── cypress
│   ├── e2e
│   │   ├── authentication
│   │   ├── navigation
│   │   ├── trading
│   │   ├── content
│   │   └── negative
│   │
│   ├── pages
│   ├── fixtures
│   ├── support
│   └── downloads
│
├── reports
│   ├── html
│   └── json
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Test Coverage

### Navigation & Layout

- Verify top navigation renders correctly
- Verify navigation links redirect to expected destinations
- Verify desktop navigation layout

### Trading Functionality

- Verify Spot Market section
- Verify trading pair categories
- Verify trading pair data structure
- Verify navigation to trading pair detail pages

### Content & Links

- Verify marketing banner
- Verify App Store and Google Play download links
- Verify Company page hero section
- Verify statistics section
- Verify trust features
- Verify community section

### Negative & Edge Cases

- Invalid route handling
- Broken navigation link detection
- Mobile viewport validation

---

## Prerequisites

- Node.js 18+
- npm
- Google Chrome (recommended)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/vipkum2/multibank-ui-automation-framework.git
```

Navigate to the project:

```bash
cd mb-qa-framework
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

Run the complete regression suite with single command and it generate the report also:

```bash
npm test
```

Open Cypress Test Runner:

```bash
npm run cy:open
```

Execute individual suites:

```bash
npm run test:smoke
npm run test:navigation
npm run test:trading
npm run test:content
npm run test:negative
```

---

## Cross-Browser Execution

Run tests in Chrome:

```bash
npm run test:chrome
```

Run tests in Microsoft Edge:

```bash
npm run test:edge
```

Run tests in Firefox:

```bash
npm run test:firefox
```

---

## Test Reports

HTML and JSON execution reports are generated under:
One sample HTTP report: `reports/html/index.html`
```text
reports/
├── html/
└── json/
```

---

## Framework Design Decisions

- Implemented using the Page Object Model to separate test logic from UI interaction.
- Reusable methods and centralized selectors improve maintainability.
- Tests are independent and deterministic to support reliable execution.
- Navigation validation is parameterized to simplify future additions.
- Assertions focus on business functionality rather than implementation details.

---

## Assumptions

- The target environment is available during execution.
- Test accounts are managed by the application.
- External App Store and Google Play links are validated for availability only.

---

## Future Enhancements

- API response validation
- Visual regression testing
- GitHub Actions CI integration
- Accessibility testing
- Test data externalization
- Parallel execution

---

## Author

**Vipin Kumar**

