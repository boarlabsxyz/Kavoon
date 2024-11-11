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

      cy.get('[data-cy="messager-picker"]').click();
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

describe('Cart Order Form Validation Tests', () => {
  viewPorts.forEach(({ name, dimensions }) => {
    const [width, height] = dimensions;

    it(`Should display validation errors on empty required fields - ${name} viewport`, () => {
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

      cy.get('[data-cy="order-form"] button[type="submit"]').should(
        'be.disabled'
      );

      // Check on validation errors are displayed
      cy.get('[data-cy="username"]').click();
      cy.focused().blur();
      cy.get('[data-cy="username"]')
        .siblings('[class^="CartOrderForm_errorFeedback"]')
        .should('be.visible')
        .and('contain', 'Будь ласка заповніть поле');

      cy.get('[data-cy="messager-picker"]').click();
      cy.contains('Telegram').click();
      cy.get('body').click(0, 0);
      cy.get('label[for="contacts"]')
        .parent()
        .siblings('[class^="CartOrderForm_errorFeedback"]')
        .should('be.visible')
        .and('contain', 'Будь ласка заповніть поле');

      cy.get('[data-cy="country"]').click();
      cy.focused().blur();
      cy.get('[data-cy="country"]')
        .siblings('[class^="CartOrderForm_errorFeedback"]')
        .should('be.visible')
        .and('contain', 'Будь ласка заповніть поле');
    });

    it(`Should not display validation errors after filling required fields - ${name} viewport`, () => {
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

      // Filling out the required fields
      cy.get('[data-cy="username"]').type('Test name');
      cy.get('[data-cy="messager-picker"]').click();
      cy.contains('Telegram').click();
      cy.get('[data-cy="numTel"]').type('Test');
      cy.get('[data-cy="country"]').type('Test country');

      // Check if no validation errors for required fields
      cy.get('[data-cy="username"]')
        .find('[class^="CartOrderForm_errorFeedback"]')
        .should('not.exist');
      cy.get('[data-cy="numTel"]')
        .parent()
        .find('[class^="CartOrderForm_errorFeedback"]')
        .should('not.exist');
      cy.get('[data-cy="country"]')
        .find('[class^="CartOrderForm_errorFeedback"]')
        .should('not.exist');

      // Check that the CartOrderForm button is active after all required fields are filled in
      cy.get('[data-cy="order-form"] button[type="submit"]').should(
        'not.be.disabled'
      );
    });
  });
});
