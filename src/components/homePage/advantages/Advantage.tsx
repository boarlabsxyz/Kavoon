import CustomImage from 'src/components/common/customImage';

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './Advantage.module.css';

type AdvantageProps = {
  name: string;
  language: Language;
};

function Advantage({ name, language }: AdvantageProps) {
  const description = lang(name, language);
  return (
    <li className={st.content}>
      <div className={st.icon}>
        <CustomImage
          src={`/img/icons/${name}.svg`}
          sizes="100% 100%"
          alt={description}
          width="32"
          height="32"
        />
      </div>
      <p className={st.description}>{description}</p>
    </li>
  );
}

export default Advantage;
