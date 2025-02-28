import { memo } from 'react';
import dynamic from 'next/dynamic';
import Container from 'src/components/common/container';
import Title from 'src/components/homePage/title';
import st from './Hero.module.css';
import { Language } from 'src/types/language';

const Subtitle = dynamic(() => import('src/components/homePage/subtitle'), {
  ssr: true,
});

type HeroProps = {
  lang: Language;
};

const Hero = ({ lang }: HeroProps) => {
  return (
    <section data-testid="hero" className={st.hero}>
      <Container>
        <div className={st.wrapper}>
          <Title />
          <Subtitle language={lang} />
        </div>
      </Container>
    </section>
  );
};

export default memo(Hero);
