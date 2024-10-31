import { timer, take, map } from 'rxjs';

import { CART_DATA } from 'src/data/constants';

export function startTimer(delay, interval) {
  return timer(delay, interval).pipe(
    take(2),
    map((number) => !number)
  );
}

export function omitValues(productObj) {
  const { count, cartId, ...copyWithoutCount } = productObj;

  return copyWithoutCount;
}

export function updateUserChoiceInfo(source, items) {
  source.next(items);
  localStorage.setItem(CART_DATA, JSON.stringify(items));
}
