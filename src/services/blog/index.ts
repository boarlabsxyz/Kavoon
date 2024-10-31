import * as path from 'node:path';
import * as fsp from 'node:fs/promises';

import { compileMDX } from 'next-mdx-remote/rsc';

import { Language } from 'src/types/language';
import PostMeta from 'src/types/postMeta';
import Post from 'src/types/post';

async function getPostsNames(folderPath: string) {
  const dirnames = await fsp.readdir(folderPath);
  return dirnames;
}

async function getPostSource(folderPath: string, name: string, lang: Language) {
  const filepath = path.join(folderPath, name, `${lang}.mdx`);
  const post = await fsp.readFile(filepath, { encoding: 'utf8' });
  return post;
}

async function parseFrontmatter(source: string) {
  const { frontmatter } = await compileMDX<PostMeta>({
    source,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
}

async function getPost(folderPath: string, name: string, lang: Language) {
  const post = await getPostSource(folderPath, name, lang);
  const frontmatter = await parseFrontmatter(post);

  return {
    slug: name,
    frontmatter,
  };
}

async function getPosts(folderPath: string, lang: Language): Promise<Post[]> {
  const dirnames = await getPostsNames(folderPath);
  const promiseData = dirnames.map(async (dirname) => {
    const postmeta = await getPost(folderPath, dirname, lang);
    return postmeta;
  });

  return Promise.all(promiseData);
}

async function getTheRestPostsData(
  folderPath: string,
  name: string,
  lang: Language
) {
  const postsMeta = await getPosts(folderPath, lang);
  const restPostsMeta = postsMeta.filter(({ slug }) => slug !== name);
  return restPostsMeta;
}

export { getPostsNames, getPostSource, getPosts, getTheRestPostsData };
