import viewPorts from '../support/viewPorts';

describe('Home Page Tests', () => {
  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display correctly on ${name} viewport`, () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('[data-testid="hero"]').should('be.visible');
      cy.scrollTo('bottom', { duration: 4000 });
      cy.waitForNetworkIdle(5000);
      cy.matchImageSnapshot(`home-page-${name}`);
    });
  });
});
