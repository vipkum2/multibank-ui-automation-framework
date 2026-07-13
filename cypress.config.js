const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://trade.mb.io",

    specPattern: "cypress/e2e/**/*.spec.js",

    viewportWidth: 1440,
    viewportHeight: 900,

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    retries: {
      runMode: 2,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      return config;
    },

    env: {
      marketingSiteUrl: "https://mb.io",
      loginPageUrl: "https://trade.mb.io"
    }
  },
});
