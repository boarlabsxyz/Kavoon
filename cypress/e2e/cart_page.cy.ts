import viewPorts from '../support/viewPorts';

viewPorts.forEach(({ name, dimensions }) => {
  const [width, height] = dimensions;

  describe(`Cart Page Tests on ${name} viewport`, () => {
    beforeEach(() => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.get('[data-cy="product-title"]').first().contains("Хом'як").click();

      cy.url().should('include', '/shop/bicycle-equipment/hamster');
      cy.scrollTo(0, 600, { duration: 1000 });

      cy.get('[data-cy="add-to-cart-btn"]')
        .contains('додати у кошик', { matchCase: false })
        .click();
      cy.scrollTo('top', { duration: 1000 });

      if (name === 'iphone-8') {
        cy.get('[data-cy="mobile-menu-btn"]').click();
        cy.get('[data-cy="link-to-cart-page-from-button"]').click();
      } else {
        cy.get('[data-cy="link-to-cart-page-from-header"]').click();
      }

      cy.url().should('include', '/shop/cart');

      cy.get('[data-cy="order-form"]').should('be.visible');
    });

    it('Should fill in the order form with valid data', () => {
      cy.scrollTo('bottom', { duration: 3000 });

      cy.get('[data-cy="username"]').type('Test name');
      cy.get('[data-cy="username"]').should('have.value', 'Test name');

      cy.get('[data-cy="messenger-picker"]').click();
      cy.contains('Telegram').click();

      cy.get('[data-cy="numTel"]').type('+380501234567');
      cy.get('[data-cy="numTel"]').should('have.value', '+380501234567');

      cy.get('[data-cy="country"]').type('Україна');
      cy.get('[data-cy="country"]').should('have.value', 'Україна');

      cy.get('[data-cy="comment"]').type('Test comment');
      cy.get('[data-cy="comment"]').should('have.value', 'Test comment');

      cy.get('[data-cy="howDiscover-picker"]').click();
      cy.contains('Фейсбук').click();

      cy.waitForNetworkIdle(5000);
      cy.matchImageSnapshot(`cart-page-filled-form-${name}`);
    });

    it('Should show validation errors on empty required fields', () => {
      cy.get('[data-cy="order-form"] button[type="submit"]').should(
        'be.disabled'
      );

      cy.get('[data-cy="username"]').click();
      cy.focused().blur();
      cy.get('[data-cy="username"]')
        .siblings('[class^="CartOrderForm_errorFeedback"]')
        .should('be.visible')
        .and('contain', 'Будь ласка заповніть поле');

      cy.get('[data-cy="messenger-picker"]').click();
      cy.contains('Telegram').click();
      cy.get('body').click(0, 0);
      cy.get('label[for^="numTel"]')
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

    it('Should not display validation errors after filling required fields', () => {
      cy.scrollTo('bottom', { duration: 3000 });
      cy.get('[data-cy="username"]').type('Test name');
      cy.get('[data-cy="messenger-picker"]').click();
      cy.contains('Telegram').click();
      cy.get('[data-cy="numTel"]').type('+380501234567');
      cy.get('[data-cy="country"]').type('Україна');

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

      cy.get('[data-cy="order-form"] button[type="submit"]').should(
        'not.be.disabled'
      );
    });
  });
});
