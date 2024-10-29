'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import CustomImage from 'src/components/common/customImage';
import { LangCode, Language } from 'src/types/language';

import st from 'src/components/common/header/LangsBlock.module.css';

type Props = {
  name: string;
  src: string;
  locale: Language;
  langCode: LangCode;
};

function LocaleListItem({ name, src, langCode, locale }: Props) {
  const pathname = usePathname();
  const { lang } = useParams();

  const linkClasses = locale === lang ? `${st.link} ${st.active}` : st.link;
  const href = pathname.replace(`/${lang}`, `/${locale}`);

  return (
    <li key={name} className={st.item}>
      <Link href={href} className={linkClasses} prefetch={false}>
        <div className={st.langImage}>
          <CustomImage src={src} alt={name} width={20} height={20} />
        </div>
        <span>{langCode}</span>
      </Link>
    </li>
  );
}

export default LocaleListItem;
