
describe('Login',() => {
  it('successfully login', () => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.fillLoginFormAndSubmit()
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
    cy.wait('@getNotes')
  })
})