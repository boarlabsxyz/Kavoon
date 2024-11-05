const viewPorts = [
  { name: 'iphone-8', dimensions: [375, 667] },
  { name: 'desktop', dimensions: [1920, 1080] },
];

describe('Blog Page Tests', () => {
  it('Visit to kavoon.com.ua/uk/blog', () => {
    cy.visit('http://localhost:3000/uk/');
    cy.get('[data-cy="blog-footer-link"]').should('have.text', 'Блог').click();
    cy.url().should('include', 'uk/blog');
  });

  it('Visit to kavoon.com.ua/en/blog', () => {
    cy.visit('http://localhost:3000/en/');
    cy.get('[data-cy="blog-footer-link"]').should('have.text', 'Blog').click();
    cy.url().should('include', 'en/blog');
  });

  it('Visit to kavoon.com.ua/pl/blog', () => {
    cy.visit('http://localhost:3000/pl/');
    cy.get('[data-cy="blog-footer-link"]').should('have.text', 'Blog').click();
    cy.url().should('include', 'pl/blog');
  });

  beforeEach(() => {
    cy.visit('/blog');
  });

  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display correctly on ${name} viewport`, () => {
      cy.viewport(width, height);
      cy.get('[data-cy="blog-page"]').should('be.visible');
      cy.scrollTo('bottom', { duration: 3000 });

      cy.get('[data-cy="header"]').invoke('css', 'position', 'absolute');

      cy.waitForNetworkIdle(5000);
      cy.matchImageSnapshot(`blog-page-${name}`);

      cy.get('[data-cy="header"]').invoke('css', 'position', 'fixed');
    });
  });
});
