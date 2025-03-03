import Navigation from 'src/components/common/header/Navigation';
import NavigationContent from 'src/components/common/header/Navigation/NavigationContent';

import { Language } from 'src/types/language';

import st from './Header.module.css';

type HeaderContentProps = {
  lang: Language;
  children: React.ReactElement;
};

function HeaderContent({ lang, children }: HeaderContentProps) {
  return (
    <div className={st.content}>
      {children}
      <Navigation lang={lang}>
        <NavigationContent lang={lang} />
      </Navigation>
    </div>
  );
}

export default HeaderContent;
