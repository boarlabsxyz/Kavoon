import * as path from 'node:path';

import PostIndexPage from 'src/components/blog/postIndexPage';

import { Metadata } from 'next';

import { Language } from 'src/types/language';
import { getPostsNames } from 'src/services/blog';
import brandingConst from 'src/data/brandingConst';

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
  const { siteUrl } = brandingConst;
  const { lang, slug } = params;

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}/blog/${slug}`,
      languages: {
        en: `${siteUrl}/en/blog/${slug}`,
        uk: `${siteUrl}/uk/blog/${slug}`,
        pl: `${siteUrl}/pl/blog/${slug}`,
      },
    },
  };
}

async function PostPage({ params: { lang, slug } }: Params) {
  return <PostIndexPage language={lang} slug={slug} postspath={postspath} />;
}

export default PostPage;
