import * as path from 'node:path';

import PostIndexPage from 'src/components/blog/postIndexPage';

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

async function PostPage({ params: { lang, slug } }: Params) {
  return <PostIndexPage language={lang} slug={slug} postspath={postspath} />;
}

export default PostPage;
