# Risk Matrix

## Objective

Identify the key risks associated with the MultiBank marketing platform prior to release and define the mitigation strategy for each identified risk.

---

| Risk Area | Potential Risk | Probability | Impact | Mitigation | Residual Risk |
|-----------|----------------|:-----------:|:------:|------------|:-------------:|
| Navigation | Broken navigation prevents users from accessing key pages | Medium | High | Validate all primary navigation links before release | Low |
| Trading Information | Spot trading content is unavailable or incorrect | Medium | High | Functional verification of trading sections and content | Low |
| Trading Pair Data | Trading pairs are missing, incorrectly grouped, or display invalid information | Low | High | Verify categories and trading pair details | Low |
| Marketing Content | Marketing banners or promotional content are missing or incorrect | Low | Medium | Validate content and page layout | Low |
| External Links | App Store links fail or redirect incorrectly | Medium | High | Verify external link navigation | Low |
| Company Information | Company page content is incomplete or inaccurate | Low | Medium | Validate headings and section content | Low |
| Invalid URLs | Users encounter unexpected errors instead of a proper error page | Medium | Medium | Verify custom error page behaviour | Low |
| Responsive Layout | Mobile users experience broken layouts or navigation | Medium | High | Validate key pages at mobile viewport sizes | Low |

---

## Overall Risk Assessment

The identified high-risk user journeys have been validated through the planned QA activities. The remaining risk is assessed as **Low**, with no known Critical or High severity issues blocking release.

### Risks Outside Current Scope

The following areas are not covered by the current automation framework and should be addressed in future testing:

- Authenticated user journeys
- Trade execution workflows
- Deposits and withdrawals
- Backend API validation
- Performance and load testing
- Security testing
- Accessibility testing