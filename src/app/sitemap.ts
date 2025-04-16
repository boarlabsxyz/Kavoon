import * as path from 'node:path';
import type { MetadataRoute } from 'next';
import { getAllProducts } from 'src/helpers/getProducts';
import { languages } from 'src/data/routes';
import { getPosts } from 'src/services/blog';
import toKebabCase from 'src/helpers/toKebabCase';
import brandingConst from 'src/data/brandingConst';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { siteUrl } = brandingConst;
  const postsFolderPath = path.resolve('src/data/articles/blog');

  const routes: string[] = [
    '',
    '/about-us',
    '/delivery-and-payment',
    '/policy',
    '/shop/cart',
  ];

  const staticRoutesSitemap = routes.flatMap((route) =>
    languages.map(({ locale }) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          languages.map(({ locale }) => [
            locale,
            `${siteUrl}/${locale}${route}`,
          ])
        ),
        canonical: `${siteUrl}/${locale}${route}`,
      },
    }))
  );

  const products = getAllProducts();

  const allCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const categoriesSitemap = allCategories.flatMap((category) =>
    languages.map(({ locale }) => ({
      url: `${siteUrl}/${locale}/shop/${toKebabCase(category)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          languages.map(({ locale }) => [
            locale,
            `${siteUrl}/${locale}/shop/${toKebabCase(category)}`,
          ])
        ),
        canonical: `${siteUrl}/${locale}/shop/${toKebabCase(category)}`,
      },
    }))
  );

  const productsSitemap = products.flatMap((product) =>
    languages.map(({ locale }) => {
      const categorySlug = toKebabCase(product.category);
      const productUrl = `${siteUrl}/${locale}/shop/${categorySlug}/${product.id}`;

      return {
        url: productUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            languages.map(({ locale }) => [
              locale,
              `${siteUrl}/${locale}/shop/${categorySlug}/${product.id}`,
            ])
          ),
          canonical: `${siteUrl}/${locale}/shop/${categorySlug}/${product.id}`,
        },
      };
    })
  );

  const postsByLanguages = await Promise.all(
    languages.map(({ locale }) => getPosts(postsFolderPath, locale))
  );
  const posts = postsByLanguages.flat();

  const postsSitemap = posts
    .flatMap((post) =>
      languages.map(({ locale }) => ({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            languages.map(({ locale }) => [
              locale,
              `${siteUrl}/${locale}/blog/${post.slug}`,
            ])
          ),
          canonical: `${siteUrl}/${locale}/blog/${post.slug}`,
        },
      }))
    )
    // avoiding duplicate URLs for blog
    .filter(
      (value, index, self) =>
        index === self.findIndex((item) => item.url === value.url)
    );

  return [
    ...staticRoutesSitemap,
    ...categoriesSitemap,
    ...productsSitemap,
    ...postsSitemap,
  ];
}
