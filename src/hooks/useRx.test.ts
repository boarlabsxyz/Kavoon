import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import useRx from './useRx';

jest.mock('react', () => ({
  useState: jest.fn((x) => [x, () => {}]),
  useEffect: jest.fn(),
}));

test('array support', () => {
  const products = new BehaviorSubject([]);
  expect(useRx(products)).toEqual([]);
});

test('object support', () => {
  const products = new BehaviorSubject('Simple String');
  expect(useRx(products)).toEqual('Simple String');
});

test('operators support', () => {
  const products = new BehaviorSubject([1, 2, 3]);
  const count = products.pipe(map((productValues) => productValues.length));
  expect(useRx(count)).toEqual(3);
});
