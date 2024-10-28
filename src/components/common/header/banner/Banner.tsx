import Link from 'next/link';

import CustomImage from 'src/components/common/customImage';
import Greeting from 'src/components/common/header/banner/Greeting';

import { Language } from 'src/types/language';

import st from 'src/components/common/header/Header.module.css';

type KavoonProps = {
  lang: Language;
  name: 'logotype';
  height: 31;
};

type BannerProps = KavoonProps;

function Banner({ lang, name, height }: BannerProps) {
  return (
    <div className={st.banner}>
      <div>
        <Link href={`/${lang}/`} prefetch={false}>
          <CustomImage
            src={`/img/logo/${name}.svg`}
            alt={name}
            width={135}
            height={height}
            priority
          />
        </Link>
      </div>
      <Greeting lang={lang} />
    </div>
  );
}

export default Banner;
