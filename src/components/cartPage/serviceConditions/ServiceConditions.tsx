import ServiceConditionsDetails from './ServiceConditionsDetails';

import lang from 'src/i18n/lang';

import st from './ServiceConditions.module.css';

type Props = {
  section: string;
  language: string;
};

function ServiceConditions({ section, language }: Props) {
  return (
    <section className={st.section}>
      <h2 className={st.title}>{lang(section, language)}</h2>
      <ServiceConditionsDetails text={lang(`${section}Details`, language)} />
    </section>
  );
}

export default ServiceConditions;
