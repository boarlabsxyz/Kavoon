import RestArticlesSectionItem from './RestArticlesSectionItem';

import lang from 'src/i18n/lang';

import Post from 'src/types/post';
import { Language } from 'src/types/language';

import st from './RestArticlesSection.module.css';

interface IProps {
  restPosts: Post[];
  language: Language;
}

function RestArticlesSection({ restPosts, language }: IProps) {
  if (!restPosts || restPosts.length === 0) {
    return null;
  }

  return (
    <section className={st.section}>
      <h3 className={st.title}>{lang('WhatElseToRead', language)}</h3>
      <div className={st.wrapper}>
        {restPosts?.map((post) => (
          <RestArticlesSectionItem
            post={post}
            key={post.slug}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}
export default RestArticlesSection;
