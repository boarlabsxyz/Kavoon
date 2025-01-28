import viewPorts from '../support/viewPorts';

describe('Shop Page Tests', () => {
  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display correctly bicycle equipment category on ${name} viewport`, () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('[data-cy="bicycle-equipment-category-link"]').click();

      cy.url().should('include', '/shop/bicycle-equipment');
      cy.get('[data-cy="subcategory-filter"]').should('be.visible');

      cy.scrollTo('bottom', { duration: 4000 });
      cy.matchImageSnapshot(`bicycle-equipment-page-${name}`);
    });

    it(`Should display correctly bag accessories category on ${name} viewport`, () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('[data-cy="bag-accessories-category-link"]').click();

      cy.url().should('include', '/shop/bag-accessories');
      cy.get('[data-cy="subcategory-filter"]').should('not.exist');

      cy.scrollTo('bottom', { duration: 4000 });
      cy.matchImageSnapshot(`bag-accessories-page-${name}`);
    });
  });
});
