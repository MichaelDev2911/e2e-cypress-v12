const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl:'https://notes-serverless-app.com/',
    env: {
      viewportWidthBreakpoint: 768,
    },    
    defaultCommandTimeout: 20000,
    setupNodeEvents(on,config) {
      // implement node event listeners here
    },
  },
})
