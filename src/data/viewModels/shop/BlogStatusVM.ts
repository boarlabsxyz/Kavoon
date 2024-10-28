import BreadcrumbsVM from 'src/data/viewModels/product/breadcrumbsVM';

const BlogStatusVM = (name: string) => ({
  breadcrumbsNavVM: new BreadcrumbsVM()
    .set('Blog', '/blog')
    .set(name, '#')
    .build(),
});

export default BlogStatusVM;
