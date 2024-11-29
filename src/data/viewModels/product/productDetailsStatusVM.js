import BreadcrumbsVM from './breadcrumbsVM';

const productDetailsStatusVM = (name) => ({
  breadcrumbsNavVM: new BreadcrumbsVM()
    .set('BreadcrumbList', '/')
    .set(name, '#')
    .build(),
});
export default productDetailsStatusVM;
