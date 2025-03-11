import * as path from 'node:path';
import { Metadata } from 'next';

import BlogIndexPage from 'src/components/blog/blogIndexPage';

import { Language } from 'src/types/language';
import { getPosts } from 'src/services/blog';

type Props = {
  params: { lang: Language };
};

export function generateMetadata({ params }: Props): Metadata {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang } = params;
  const path = '/blog';

  return {
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: {
        en: `${baseUrl}/en${path}`,
        uk: `${baseUrl}/uk${path}`,
        pl: `${baseUrl}/pl${path}`,
      },
    },
  };
}

async function Blog({ params: { lang } }: Props) {
  const postspath = path.join(process.cwd(), 'src', 'data', 'articles', 'blog');

  const posts = await getPosts(postspath, lang);

  return <BlogIndexPage posts={posts} language={lang} />;
}

export default Blog;
