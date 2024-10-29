import { compileMDX } from 'next-mdx-remote/rsc';

import BreadcrumbsNavForBlog from 'src/components/blog/breadcrumbsNavForBlog';
import IndomitabilityOfUkrainiansContainer from 'src/components/blog/indomitabilityOfUkrainiansContainer';
import WrapperForHorizontalElements from 'src/components/blog/wrapperForHorizontalElements';
import GoToShopBtn from 'src/components/blog/goToShopBtn';
import RestArticlesSection from 'src/components/blog/restArticlesSection';
import CustomImage from 'src/components/common/customImage';

import { getPostSource, getTheRestPostsData } from 'src/services/blog';
import blogStatusVM from 'src/data/viewModels/shop/BlogStatusVM';
import lang from 'src/i18n/lang';

import PostMeta from 'src/types/postMeta';
import { Language } from 'src/types/language';

import st from './PostIndexPage.module.css';

type Props = {
  language: Language;
  slug: string;
  postspath: string;
};

async function PostIndexPage({ language, slug, postspath }: Props) {
  const rawMDX = await getPostSource(postspath, slug, language);
  const { content, frontmatter } = await compileMDX<PostMeta>({
    source: rawMDX,
    options: { parseFrontmatter: true },
    components: {
      CustomImage,
      IndomitabilityOfUkrainiansContainer,
      WrapperForHorizontalElements,
    },
  });

  const restPosts = await getTheRestPostsData(postspath, slug, language);
  const { breadcrumbsNavVM } = blogStatusVM(frontmatter.title);

  return (
    <>
      <div className={st.container}>
        {rawMDX ? (
          <>
            <BreadcrumbsNavForBlog vm={breadcrumbsNavVM} language={language} />
            <h2 className={st.postTitle}>{frontmatter.title}</h2>
            {content}
            <RestArticlesSection
              restPosts={restPosts}
              language={
                language === 'pl' || language === 'uk' ? language : 'en'
              }
            />
          </>
        ) : (
          <div className={st.noArticle}>{lang('NoArticle', language)}</div>
        )}
      </div>
      <GoToShopBtn language={language} />
    </>
  );
}

export default PostIndexPage;
