import * as path from 'node:path';

import BlogIndexPage from 'src/components/blog/blogIndexPage';

import { Language } from 'src/types/language';
import { getPosts } from 'src/services/blog';

type Props = {
  params: { lang: Language };
};

async function Blog({ params: { lang } }: Props) {
  const postspath = path.join(process.cwd(), 'src', 'data', 'articles', 'blog');

  const posts = await getPosts(postspath, lang);

  return <BlogIndexPage posts={posts} language={lang} />;
}

export default Blog;
