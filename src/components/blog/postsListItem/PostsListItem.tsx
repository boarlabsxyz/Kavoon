import Link from 'next/link';

import CustomImage from 'src/components/common/customImage';

import shimmerUrl from 'src/helpers/shimmerUrl';
import lang from 'src/i18n/lang';
import Post from 'src/types/post';
import { Language } from 'src/types/language';

import st from './PostsListItem.module.css';

interface IProps {
  post: Post;
  language: Language;
}

function PostsListItem({ post: { frontmatter, slug }, language }: IProps) {
  const { title, author, excerpt, coverImage } = frontmatter;

  return (
    <div className={st.postContainer}>
      <div className={st.postWrapper}>
        <div className={st.postPanelImage}>
          <CustomImage
            src={coverImage}
            alt="story-preview"
            fill
            sizes="100% 100%"
            placeholder="blur"
            blurDataURL={shimmerUrl}
            priority
          />
        </div>
        <div className={st.postPanelInfo}>
          <Link href={`blog/${slug}`} passHref className={st.postPanelTitle}>
            {title}
          </Link>
          {author ? (
            <span className={st.postPanelAuthor}>
              <span className={st.postPanelAuthorThin}>
                {`${lang('Author', language)} `}
              </span>
              {author}
            </span>
          ) : null}
          <p className={st.postPanelText}>{excerpt}</p>
          <Link href={`blog/${slug}`} passHref className={st.postPanelLink}>
            {lang('ReadMore', language)}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostsListItem;
