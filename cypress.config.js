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
  },
})
// npx cypress run --record --key d8f41ccb-9255-4bba-9edd-49c3f7257cfd
//projectId: "vsy9t6"