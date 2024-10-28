import SocialLinksList from 'src/components/common/socialLinksList';
import LangsBlock from 'src/components/common/header/LangsBlock';

import { Language } from 'src/types/language';

import st from './Navigation.module.css';

type Props = {
  lang: Language;
};

function NavigationContent({ lang }: Props) {
  return (
    <div className={st.langsAndSocials}>
      <LangsBlock lang={lang} />
      <SocialLinksList />
    </div>
  );
}

export default NavigationContent;
