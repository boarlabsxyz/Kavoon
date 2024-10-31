import CustomImage from 'src/components/common/customImage';

import shimmerUrl from 'src/helpers/shimmerUrl';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './Equipment.module.css';

type Item = {
  src: string;
  name: string;
  link: string;
};

type Props = {
  items: Item[];
  language: Language;
};

function Equipment({ items, language }: Props) {
  return (
    <div className={st.wrapper}>
      <p className={st.title}>{lang('ThingsTaken', language)}</p>
      <ul className={st.items}>
        {items.map(({ name, src }) => {
          const productName = lang(name, language);
          return (
            <li key={name} className={st.item}>
              <CustomImage
                className={st.img}
                src={src}
                alt={productName}
                width={70}
                height={70}
                blurDataURL={shimmerUrl}
              />
              <p className={st.itemName}>{productName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Equipment;
