import BreadcrumbsVM from 'src/data/viewModels/product/breadcrumbsVM';

const PolicyStatusVM = () => ({
  breadcrumbsNavVM: new BreadcrumbsVM()
    .set('MenuItemShop', '/')
    .set('PolicyTitle', '#')
    .build(),
});

export default PolicyStatusVM;
