import LocaleListItem from './LocaleListItem';

import { languages } from 'src/data/routes';

import st from 'src/components/common/header/LangsBlock.module.css';

function LocaleList() {
  return (
    <ul className={st.availableLangs}>
      {languages.map(({ name, src, locale, langCode }) => {
        return (
          <LocaleListItem
            key={name}
            name={name}
            src={src}
            locale={locale}
            langCode={langCode}
          />
        );
      })}
    </ul>
  );
}

export default LocaleList;
