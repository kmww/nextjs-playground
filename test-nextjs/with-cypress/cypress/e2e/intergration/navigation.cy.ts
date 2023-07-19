describe('Navigation', () => {
  it('should correctly navigate to the article page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/articles"]').first().click();
    cy.url().should(
      'be.equal',
      'http://localhost:3000/articles/healthy-summer-meloncarrot-soup-u12w3o0d'
    );
    cy.get('h1').contains('Healthy summer melon-carrot soup');
  });
});
