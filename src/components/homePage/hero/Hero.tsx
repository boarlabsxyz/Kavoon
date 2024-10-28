import Container from 'src/components/common/container';
import Title from 'src/components/homePage/title';
import Subtitle from 'src/components/homePage/subtitle';

import { Language } from 'src/types/language';

import st from './Hero.module.css';

type HeroProps = {
  lang: Language;
};

function Hero({ lang }: HeroProps) {
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
}

export default Hero;
