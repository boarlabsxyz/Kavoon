import Link from 'next/link';

import BreadcrumbsNav from 'src/components/common/breadcrumbs';

import PolicyStatusVM from 'src/data/viewModels/shop/policyStatusVM';

import { Language } from 'src/types/language';
import { I18N } from 'src/types/i18n.type';

import st from './Policy.module.css';

type Props = {
  language: Language;
  policy: I18N;
};

function MainPageLink({ language, linkName }) {
  return (
    <Link className={st.link} href={`/${language}/`}>
      ({linkName})
    </Link>
  );
}

function Policy({ language, policy }: Props) {
  const linkName = `https://www.kavoon.com.ua/${language}`;
  const vm = PolicyStatusVM();

  return (
    <div className={st.wrapper}>
      <BreadcrumbsNav vm={vm.breadcrumbsNavVM} language={language} />
      <div className={st.content}>
        <h2 className={st.title}>{policy.title.toUpperCase()}</h2>
        <p className={st.text}>
          {policy.lawFirstPart}
          <MainPageLink language={language} linkName={linkName} />
          {policy.lawSecondPart}
          <MainPageLink language={language} linkName={linkName} />
          {policy.lawThirdPart}
        </p>
        <h3 className={st.subtitle}>{policy.purposeTitle}</h3>
        <p className={st.text}>{policy.purpose}</p>
        <h3 className={st.subtitle}>{policy.periodTitle}</h3>
        <p className={st.text}>{policy.period}</p>
        <h3 className={st.subtitle}>{policy.protectionTitle}</h3>
        <p className={st.text}>{policy.protection}</p>
      </div>
    </div>
  );
}

export default Policy;
