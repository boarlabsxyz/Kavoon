import CustomImage from 'src/components/common/customImage';
import getActiveLocale from 'src/helpers/getActiveLocale';
import { Language } from 'src/types/language';

import st from 'src/components/common/header/LangsBlock.module.css';

type ActiveLocaleProps = {
  lang: Language;
};

function ActiveLocale({ lang }: ActiveLocaleProps) {
  const activeLocale = getActiveLocale(lang);

  return (
    <div className={st.selectedLang}>
      <CustomImage
        src={activeLocale.src}
        alt={activeLocale.name}
        width={20}
        height={20}
        className={st.selectedLangImage}
      />
      <span className={st.langName}>{activeLocale.langCode}</span>
    </div>
  );
}

export default ActiveLocale;
