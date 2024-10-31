import TopPost from 'src/components/blog/topPost';
import PostsListItem from 'src/components/blog/postsListItem';

import lang from 'src/i18n/lang';
import Post from 'src/types/post';
import { Language } from 'src/types/language';

import st from './BlogIndexPage.module.css';

interface IProps {
  posts: Post[];
  language: Language;
}

function BlogIndexPage({ posts, language }: IProps) {
  return (
    <>
      <div className={st.content} data-cy="blog-page">
        <h1 className={st.indexTitle}>{lang('OurStories', language)}</h1>
        <TopPost
          pageNames={['aboutUs', 'deliveryAndPayment']}
          language={language}
        />
      </div>

      {posts.map((post) => (
        <PostsListItem post={post} key={post.slug} language={language} />
      ))}
    </>
  );
}

export default BlogIndexPage;
