import * as path from 'node:path';
import { Metadata } from 'next';

import BlogIndexPage from 'src/components/blog/blogIndexPage';

import { Language } from 'src/types/language';
import { getPosts } from 'src/services/blog';
import brandingConst from 'src/data/brandingConst';

type Props = {
  params: { lang: Language };
};

export function generateMetadata({ params }: Props): Metadata {
  const { siteUrl } = brandingConst;
  const { lang } = params;
  const path = '/blog';

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: {
        en: `${siteUrl}/en${path}`,
        uk: `${siteUrl}/uk${path}`,
        pl: `${siteUrl}/pl${path}`,
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
