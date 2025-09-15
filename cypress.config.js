const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // ? env nastavený na použití @cypress/grep, aby filtroval testy
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
