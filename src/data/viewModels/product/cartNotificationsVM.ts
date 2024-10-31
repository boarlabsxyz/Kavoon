import { map, switchMap, of, timer, distinctUntilChanged } from 'rxjs';

import cartModel from 'src/data/logic/cartLogic';

export default function cartNotificationVM() {
  const isEmptyCart$ = cartModel.products.pipe(
    map((items) => items.length),
    distinctUntilChanged(),
    switchMap((length) => {
      if (length) return of(false);

      return timer(1000).pipe(map(() => true));
    })
  );

  return {
    isEmptyCart$,
  };
}
