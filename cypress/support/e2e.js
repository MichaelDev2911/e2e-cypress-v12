import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()



import './commands'
import 'cypress-mailosaur'
import 'cypress-iframe'

// Alternatively you can use CommonJS syntax:
// require('./commands')