import Link from 'next/link';

import CustomImage from 'src/components/common/customImage';

import st from './TopPostItem.module.css';
import { I18N } from 'src/types/i18n.type';
import getDictionary from 'src/i18n/getDictionary';
import { Language } from 'src/types/language';
import toKebabCase from 'src/helpers/toKebabCase';

type Props = {
  pageName: string;
  language: Language;
};

async function TopPostItem({ pageName, language }: Props) {
  const i18n = (await getDictionary(language, pageName)) as I18N;
  const pageRef = toKebabCase(pageName);

  return (
    <div className={st.container}>
      <Link href={`${pageRef}`} className={st.title}>
        {i18n.title}
      </Link>

      <p className={st.text}>{i18n.subtitle}</p>

      <Link href={`${pageRef}`} className={st.link}>
        <CustomImage
          src="/img/icons/blog-index-button.svg"
          alt="Read more"
          width={28}
          height={18}
        />
      </Link>
    </div>
  );
}

export default TopPostItem;
