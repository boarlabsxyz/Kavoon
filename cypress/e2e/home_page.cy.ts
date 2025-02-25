import viewPorts from '../support/viewPorts';

describe('Home Page Tests', () => {
  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display correctly on ${name} viewport`, () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('[data-testid="hero"]').should('be.visible');
      cy.get('[data-cy="product-card"]').each(($card) => {
        cy.wrap($card).scrollIntoView();
        cy.wrap($card)
          .find('img')
          .should('be.visible')
          .and('have.prop', 'naturalWidth')
          .should('be.greaterThan', 0);
      });
      cy.scrollTo('bottom', { duration: 1000 });
      cy.waitForNetworkIdle(5000);
      cy.matchImageSnapshot(`home-page-${name}`);
    });
  });
});
