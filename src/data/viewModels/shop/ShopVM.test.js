import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';

import ShopVM from '.';

describe('ShopVM', () => {
  it('should create shopVM for regular shop', () => {
    const result = ShopVM();

    expect(result.shopPageStatusVM).toBeDefined();
    expect(result.productsListVM).toBeDefined();
  });
});
