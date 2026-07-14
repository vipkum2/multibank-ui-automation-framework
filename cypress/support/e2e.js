// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err) => {
  // Ignore the known React error on the marketing website
  if (
    //err.message.includes('Minified React error #329')
    err.message.includes('Minified React error') ||
    err.message.includes('Element attr did not return a valid number') ||
    err.message.includes('Script error') || 
    err.message.includes('attachShadow') ||
    err.message.includes('initialised') // observed in --headless chrome mode
  ) {
    return false;
  }
  // Let all other exceptions fail the test
  return true;
});