import BreadcrumbsVM from 'src/data/viewModels/product/breadcrumbsVM';

export default class CartPageStatusVM {
  breadcrumbsNavVM: { breadcrumbs: { name: string; src: string }[] };

  constructor() {
    this.breadcrumbsNavVM = new BreadcrumbsVM()
      .set('BreadcrumbList', '/')
      .set('BreadcrumbCart', '#')
      .build();
  }
}
