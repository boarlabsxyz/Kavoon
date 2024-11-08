const viewPorts = [
  { name: 'iphone-8', dimensions: [375, 667] },
  { name: 'desktop', dimensions: [1920, 1080] },
];

describe('Cart Page Tests', () => {
  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display correctly on ${name} viewport`, () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('[data-cy="product-title"]').first().contains("Хом'як").click();

      cy.url().should('include', '/shop/bicycle-equipment/hamster');
      cy.scrollTo(0, 600, { duration: 1000 });

      cy.get('[data-cy="add-to-cart-btn"]')
        .contains('додати у кошик', { matchCase: false })
        .click();
      cy.scrollTo('top', { duration: 1000 });

      cy.get('main [data-cy="cart-link"]').click();
      cy.url().should('include', '/shop/cart');

      cy.get('[data-cy="order-form"]').should('be.visible');
      cy.scrollTo('bottom', { duration: 3000 });

      cy.get('[data-cy="username"]').type('Test name');
      cy.get('[data-cy="username"]').should('have.value', 'Test name');

      cy.get('[data-cy="massager-picker"]').click();
      cy.contains('Telegram').click();

      cy.get('[data-cy="numTel"]').type('Test number phone');
      cy.get('[data-cy="numTel"]').should('have.value', 'Test number phone');

      cy.get('[data-cy="country"]').type('Test country');
      cy.get('[data-cy="country"]').should('have.value', 'Test country');

      cy.get('[data-cy="comment"]').type('Test comment');
      cy.get('[data-cy="comment"]').should('have.value', 'Test comment');

      cy.get('[data-cy="howDiscover-picker"]').click();
      cy.contains('Фейсбук').click();

      cy.waitForNetworkIdle(5000);
      cy.matchImageSnapshot(`cart-page-${name}`);
    });
  });
});
