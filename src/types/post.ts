import PostMeta from './postMeta';

interface Post {
  frontmatter: PostMeta;
  slug: string;
}

export default Post;
