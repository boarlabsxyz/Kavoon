import { YouTubeEmbed } from '@next/third-parties/google';

import lang from 'src/i18n/lang';

import { Language } from 'src/types/language';

import st from './EmbedVideo.module.css';

type Props = {
  language: Language;
  embedVideo: { id: string; title: string };
};

function EmbedVideo({ language, embedVideo }: Props) {
  return (
    <section className={st.wrapper}>
      <h2 className={st.title}>{lang(embedVideo.title, language)}</h2>
      <YouTubeEmbed videoid={embedVideo.id} />
    </section>
  );
}

export default EmbedVideo;
