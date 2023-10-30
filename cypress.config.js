const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 8000,
  projectId: 'vsy9t6',
  e2e: {
    baseUrl:'https://notes-serverless-app.com/',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
        
  },
})
