# Task 2 – QA Strategy & Thinking

## Scenario

A fintech startup is preparing to launch its first public mobile trading application for iOS and Android in two weeks. The application involves real user funds, has no existing QA documentation or automated test suite, and has been developed rapidly.

---

# 1. Where do you start?

My first priority would be understanding the product before writing a single test.

I would begin by:

- Understanding the business-critical user journeys.
- Identifying high-risk features involving user funds.
- Reviewing product requirements and available documentation.
- Meeting with Product Managers and Developers to understand expected behaviour.
- Installing the application on both iOS and Android.
- Exploring the application manually to identify obvious issues.
- Creating a risk-based testing strategy.

Since release is only two weeks away, I would focus on validating the highest business risks rather than attempting complete coverage.

---

# 2. How would you approach testing this app?

I would use a layered testing approach.

## Smoke Testing

Validate that the application launches correctly and core functionality is available.

## Functional Testing

Verify:

- Login
- Registration
- MFA
- Market data
- Trading
- Deposits
- Withdrawals
- Portfolio
- Notifications
- Settings

## Negative Testing

Verify:

- Invalid credentials
- Session expiration
- Network interruptions
- Insufficient balance
- Invalid trading inputs
- API failures

## Cross-platform Testing

Execute on:

- iOS
- Android

across multiple devices and screen sizes.

## Regression Testing

Build a lightweight regression suite covering all critical business flows.

---

# 3. What does QA look like inside a sprint?

QA should be involved throughout the entire sprint.

### During Backlog Refinement

- Review requirements
- Identify risks
- Define acceptance criteria
- Estimate testing effort

### During Development

- Clarify requirements
- Review designs
- Prepare test cases
- Identify automation opportunities

### During Feature Completion

- Execute functional testing
- Verify acceptance criteria
- Raise defects
- Retest fixes

### Before Sprint Completion

- Execute regression suite
- Verify no critical defects remain
- Support release readiness

QA should not be treated as the final phase of development but as a continuous activity throughout the sprint.

---

# 4. What does your ideal regression suite look like?

A regression suite should be:

- Fast
- Stable
- Independent
- High value

It should complete within approximately 30–45 minutes and cover the application's most critical user journeys.

Example coverage:

- Application launch
- Login
- Registration
- MFA
- Deposit
- Withdrawal
- Spot Trading
- Order placement
- Portfolio
- Transaction History
- Notifications
- Logout

Lower-risk UI validations would be executed separately to keep the regression suite efficient.

---

# 5. What would keep you up at night before public release?

Since the application manages real user funds, my biggest concerns would be:

- Incorrect trade execution
- Incorrect account balances
- Deposit or withdrawal failures
- Duplicate transactions
- Security vulnerabilities
- Authentication failures
- Session management issues
- API instability
- Production environment configuration
- Performance degradation during high market volatility

Even small defects in these areas could result in financial loss and significant reputational damage.

My release recommendation would therefore depend primarily on confidence in these critical user journeys rather than overall test coverage.