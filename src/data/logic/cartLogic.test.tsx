import { CART_DATA } from 'src/data/constants';
import cartLogic, { handleUserChoiceInfo } from './cartLogic';

const testProduct1 = {
  id: 'testProductId1',
  cartId: 'testCartId1',
  count: 0,
  priceUAH: 45,
  priceEURO: 1,
};
const testProduct2 = {
  id: 'testProductId2',
  cartId: 'testCartId2',
  count: 0,
  priceUAH: 90,
  priceEURO: 2,
};

describe('CartLogic', () => {
  describe('addProduct', () => {
    it('should add a new product if the cart is empty', () => {
      cartLogic.addProduct(testProduct1);
      expect(cartLogic.products.getValue()).toEqual([testProduct1]);
    });
    it('should increase the count if the same product is added again', () => {
      cartLogic.products.next([testProduct1]);

      cartLogic.addProduct(testProduct1);
      cartLogic.addProduct(testProduct1);
      expect(
        cartLogic.products
          .getValue()
          .reduce((acc, product) => acc + product.count, 0)
      ).toEqual(2);
    });
    it('should add a new product if it is different from existing ones', () => {
      const testedData = [testProduct1, testProduct2];
      cartLogic.products.next(testedData);
      cartLogic.addProduct(testProduct1);
      cartLogic.addProduct(testProduct1);
      cartLogic.addProduct(testProduct2);
      expect(
        cartLogic.products
          .getValue()
          .reduce((acc, product) => acc + product.count, 0)
      ).toEqual(3);
    });
  });

  describe('increase()', () => {
    it('should increase the count of an existing product', () => {
      cartLogic.products.next([testProduct1]);
      cartLogic.increase(testProduct1.cartId);

      expect(cartLogic.products.getValue()).toEqual([
        {
          ...testProduct1,
          count: testProduct1.count + 1,
        },
      ]);
    });

    it('should not affect other products when increasing', () => {
      const testedData = [testProduct1, testProduct2];
      cartLogic.products.next(testedData);
      cartLogic.increase(testProduct1.cartId);
      expect(cartLogic.products.getValue()[0].count).toEqual(
        testProduct1.count + 1
      );
      expect(cartLogic.products.getValue()[1].count).toEqual(
        testProduct2.count
      );
    });
  });

  describe('decrease', () => {
    it('should decrease the count of a product', () => {
      const testedData = { ...testProduct1, count: 2 };
      cartLogic.products.next([testedData]);
      cartLogic.decrease(testProduct1.cartId);

      expect(cartLogic.products.getValue()).toEqual([
        {
          ...testedData,
          count: testedData.count - 1,
        },
      ]);
    });
    it('should not decrease the count by less than one', () => {
      const testedData = { ...testProduct1, count: 2 };
      const minCount = 1;
      cartLogic.products.next([testedData]);
      cartLogic.decrease(testProduct1.cartId);
      cartLogic.decrease(testProduct1.cartId);
      cartLogic.decrease(testProduct1.cartId);

      expect(cartLogic.products.getValue()).toEqual([
        {
          ...testedData,
          count: minCount,
        },
      ]);
    });
  });

  describe('deleteProduct', () => {
    it('should delete a product by cartId', () => {
      cartLogic.addProduct(testProduct1);

      cartLogic.deleteProduct(testProduct1.cartId);

      expect(cartLogic.products.getValue()).toEqual([]);
    });
  });

  describe('handleUserChoiceInfo', () => {
    it('should load products from localStorage', () => {
      const storedProducts = [testProduct1, testProduct2];
      localStorage.setItem(CART_DATA, JSON.stringify(storedProducts));

      handleUserChoiceInfo();

      expect(cartLogic.products.getValue()).toEqual(storedProducts);
    });
  });

  describe('init', () => {
    it('should initialize with data from localStorage and set up event listener', () => {
      const removeListenerMock = cartLogic.init();
      const storedProducts = [testProduct1, testProduct2];
      localStorage.setItem(CART_DATA, JSON.stringify(storedProducts));

      window.dispatchEvent(new Event('storage'));

      expect(cartLogic.products.getValue()).toEqual(storedProducts);

      removeListenerMock();
    });
  });
});
