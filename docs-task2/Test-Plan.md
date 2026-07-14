# Test Plan

## Objective

Validate the critical functionality of the MultiBank marketing website before release by ensuring that navigation, trading information, content, and user-facing functionality operate as expected.

---

## Scope

### In Scope

- Navigation
- Trading Explore page
- Company page
- Marketing content
- External links
- Responsive navigation
- Negative scenarios

### Out of Scope

- Authenticated trading
- Deposit/Withdrawal
- Backend API validation
- Performance testing
- Security testing

---

## Test Strategy

### Test Types

- Functional Testing
- UI Validation
- Smoke Testing
- Regression Testing
- Cross-browser Testing
- Responsive Testing

---

## Browsers

- Chrome
- Microsoft Edge
- Firefox

---

## Test Environment

- Production Marketing Website
- Cypress 15
- Node.js
- GitHub Actions

---

## Test Deliverables

The following deliverables are produced as part of the QA process:

- Automated Cypress test suite
- Mochawesome HTML & JSON execution reports
- GitHub Actions CI execution
- Cross-browser execution evidence
- Release Readiness Checklist
- Risk Matrix

---

## Entry Criteria

- Application deployed successfully
- Test environment available
- No blocking infrastructure issues

---

## Exit Criteria

- All critical test cases passed
- No Critical or High severity defects
- Test report generated successfully

---

## Requirement Coverage Matrix

| Requirement             | Test Approach      | Automation Coverage | Status   |
| ----------------------- | ------------------ | ------------------- | -------- |
| Navigation & Layout     | Functional         | ✅ Covered          | Complete |
| Navigation Links        | Functional         | ✅ Covered          | Complete |
| Desktop Navigation      | UI Validation      | ✅ Covered          | Complete |
| Spot Trading Section    | Functional         | ✅ Covered          | Complete |
| Trading Pair Categories | Functional         | ✅ Covered          | Complete |
| Trading Pair Details    | Functional         | ✅ Covered          | Complete |
| Marketing Banner        | UI Validation      | ✅ Covered          | Complete |
| App Store Download Link | Functional         | ✅ Covered          | Complete |
| Company Page            | Functional         | ✅ Covered          | Complete |
| Invalid Route Handling  | Negative Testing   | ✅ Covered          | Complete |
| Broken Navigation Links | Negative Testing   | ✅ Covered          | Complete |
| Mobile Viewport         | Responsive Testing | ✅ Covered          | Complete |
