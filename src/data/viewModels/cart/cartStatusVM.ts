import { Observable } from 'rxjs';

import cartModel from 'src/data/logic/cartLogic';

export default class CartStatusVM {
  count: Observable<any>;

  href: string;

  constructor() {
    this.count = cartModel.count;
    this.href = '/shop/cart';
  }
}
