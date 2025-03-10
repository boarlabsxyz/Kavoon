import * as path from 'node:path';

import PostIndexPage from 'src/components/blog/postIndexPage';

import { Metadata } from 'next';

import { Language } from 'src/types/language';
import { getPostsNames } from 'src/services/blog';

export const dynamicParams = false;

const postspath = path.join(process.cwd(), 'src', 'data', 'articles', 'blog');

export async function generateStaticParams() {
  const names = await getPostsNames(postspath);
  return names.map((name) => ({ slug: name }));
}

type Params = {
  params: {
    lang: Language;
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang, slug } = params;

  return {
    // title: `Блог | ${slug}`,
    alternates: {
      canonical: `${baseUrl}/${lang}/blog/${slug}`,
      languages: {
        en: `${baseUrl}/en/blog/${slug}`,
        uk: `${baseUrl}/uk/blog/${slug}`,
        pl: `${baseUrl}/pl/blog/${slug}`,
      },
    },
  };
}

async function PostPage({ params: { lang, slug } }: Params) {
  return <PostIndexPage language={lang} slug={slug} postspath={postspath} />;
}

export default PostPage;
