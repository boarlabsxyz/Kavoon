import viewPorts from '../support/viewPorts';

describe('Product Page Tests', () => {
  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display correctly on ${name} viewport`, () => {
      cy.viewport(width, height);

      cy.visit('/');

      cy.scrollTo(0, 600, { duration: 1000 });
      cy.get('[data-cy="product-title"]')
        .contains('Сумка на кермо для снеків "Хомʼяк"')
        .click();
      cy.url().should('include', '/shop/bicycle-equipment/hamster');
      cy.get('[data-cy="product-page"]').should('be.visible');

      cy.get('[data-cy="preview-slider"]').each(($img) => {
        cy.wrap($img).scrollIntoView();
        cy.wrap($img)
          .find('img')
          .should('be.visible')
          .and('have.prop', 'naturalWidth')
          .should('be.greaterThan', 0);
      });

      cy.scrollTo(0, 2000, { duration: 1000 });
      cy.get('[data-cy="add-to-cart-btn"]').should('be.visible');

      cy.get('[data-cy="add-to-cart-btn"]').invoke('css', 'position', 'static');

      cy.scrollTo('bottom', { duration: 3000 });
      cy.waitForNetworkIdle(5000);

      cy.get('[data-cy="product-card"]').then(($el) => {
        const elWidth = $el.width();
        const elHeight = $el.height();

        cy.get('[data-cy="product-card"]').invoke(
          'html',
          `<div style="width: ${elWidth}px; height: ${elHeight}px; background: lightgrey;"></div>`
        );
      });

      cy.matchImageSnapshot(`product-page-${name}`);

      cy.get('[data-cy="add-to-cart-btn"]').invoke('css', 'position', 'fixed');
    });
  });
});
