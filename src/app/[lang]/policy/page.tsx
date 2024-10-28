import type { Metadata } from 'next';

import Policy from 'src/components/policyPage/policy';

import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';
import getDictionary from 'src/i18n/getDictionary';
import { I18N } from 'src/types/i18n.type';

type Props = {
  params: { lang: Language };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const language = params.lang;

  return {
    title: `${translate('SiteName', language)} - ${translate('PolicyTitle', language)}`,
  };
}

async function PolicyPage({ params }: Props) {
  const { lang } = params;

  try {
    const i18n = (await getDictionary(lang, 'policy')) as I18N;
    return <Policy language={lang} policy={i18n} />;
  } catch (error) {
    return <div>Error loading policy page.</div>;
  }
}

export default PolicyPage;
