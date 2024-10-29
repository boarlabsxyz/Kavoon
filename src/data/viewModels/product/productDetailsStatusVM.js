import CartNotificationsVM from './cartNotificationsVM';
import BreadcrumbsVM from './breadcrumbsVM';

const productDetailsStatusVM = (name) => ({
  breadcrumbsNavVM: new BreadcrumbsVM()
    .set('BreadcrumbList', '/')
    .set(name, '#')
    .build(),
  cartNotificationsVM: CartNotificationsVM(),
});
export default productDetailsStatusVM;
