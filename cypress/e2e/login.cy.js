describe('Login',() =>{
  const emailAddress = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')
  it('successfully login', () => {
    cy.fillLoginFormAndSubmit(emailAddress, password)
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})