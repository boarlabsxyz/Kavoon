import CustomImage from 'src/components/common/customImage';
import TopPostItem from 'src/components/blog/topPostItem';

import shimmerUrl from 'src/helpers/shimmerUrl';

import st from './TopPost.module.css';
import { Language } from 'src/types/language';

type Props = {
  pageNames: string[];
  language: Language;
};

function TopPost({ pageNames, language }: Props) {
  return (
    <>
      <div className={st.container}>
        <div className={st.imageBackground}>
          <CustomImage
            src="/img/blog/main_1366x600@3x.jpg"
            alt="top-post"
            fill
            sizes="100% 100%"
            placeholder="blur"
            blurDataURL={shimmerUrl}
            priority
          />
          <div className={st.panelWrapper}>
            <div className={st.postPanel}>
              {pageNames.map((pageName) => (
                <TopPostItem
                  pageName={pageName}
                  key={pageName}
                  language={language}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPost;
