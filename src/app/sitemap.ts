import * as path from 'node:path';
import type { MetadataRoute } from 'next';
import { getAllProducts } from 'src/helpers/getProducts';
import { languages } from 'src/data/routes';
import { getPosts } from 'src/services/blog';
import toKebabCase from 'src/helpers/toKebabCase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kavoon.com.ua';
  const postsFolderPath = path.resolve('src/data/articles/blog');

  const routes: string[] = [
    '',
    '/about-us',
    '/delivery-and-payment',
    '/policy',
  ];

  const staticRoutesSitemap = routes.flatMap((route) =>
    languages.map(({ locale }) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          languages.map(({ locale }) => [
            locale,
            `${baseUrl}/${locale}${route}`,
          ])
        ),
      },
    }))
  );

  const allCategories = Array.from(
    new Set(getAllProducts().map((product) => product.category))
  );

  const categoriesSitemap = allCategories.flatMap((category) =>
    languages.map(({ locale }) => ({
      url: `${baseUrl}/${locale}/shop/${toKebabCase(category)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          languages.map(({ locale }) => [
            locale,
            `${baseUrl}/${locale}/shop/${toKebabCase(category)}`,
          ])
        ),
      },
    }))
  );

  const products = getAllProducts();
  const productsSitemap = products.flatMap((product) =>
    languages.map(({ locale }) => ({
      url: `${baseUrl}/${locale}/shop/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          languages.map(({ locale }) => [
            locale,
            `${baseUrl}/${locale}/shop/${product.id}`,
          ])
        ),
      },
    }))
  );

  const postsByLanguages = await Promise.all(
    languages.map(({ locale }) => getPosts(postsFolderPath, locale))
  );
  const posts = postsByLanguages.flat();

  const postsSitemap = posts
    .flatMap((post) =>
      languages.map(({ locale }) => ({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            languages.map(({ locale }) => [
              locale,
              `${baseUrl}/${locale}/blog/${post.slug}`,
            ])
          ),
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
