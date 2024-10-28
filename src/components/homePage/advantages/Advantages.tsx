import Advantage from './Advantage';

import { Language } from 'src/types/language';

import st from './Advantages.module.css';

type AdvantagesProps = {
  lang: Language;
};

const advantages = ['HandMade', 'Durable', 'WaterRepellent'];

function Advantages({ lang }: AdvantagesProps) {
  return (
    <section className={st.section}>
      <ul className={st.advantages}>
        {advantages.map((advantage) => (
          <Advantage key={advantage} name={advantage} language={lang} />
        ))}
      </ul>
    </section>
  );
}

export default Advantages;
