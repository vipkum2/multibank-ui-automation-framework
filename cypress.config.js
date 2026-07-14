const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: true,
  reporter: "mochawesome",

  reporterOptions: {
        reportDir: "reports/json",
        overwrite: false,
        html: false,
        json: true
    },

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
        const cleanDirectory = (dir) => {
          fs.mkdirSync(dir, { recursive: true });
          fs.readdirSync(dir).forEach(file => {
            fs.rmSync(path.join(dir, file), {
                recursive: true,
                force: true
            });
        });
    };

    on("before:run", () => {
        cleanDirectory("reports/html");
        cleanDirectory("reports/json");
    });
      return config;
    },

    env: {
      marketingSiteUrl: "https://mb.io",
      loginPageUrl: "https://trade.mb.io"
    }
  },
});
