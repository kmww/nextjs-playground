describe('articles APIs', () => {
  it(`should correctly set application/json header`, () => {
    cy.request('http://localhost:3000/api/articles')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('should correctly return a 200 status code', () => {
    cy.request('http://localhost:3000/api/articles')
      .its('status')
      .should('be.equal', 200);
  });
});
