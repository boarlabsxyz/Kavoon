import Container from 'src/components/common/container';
import EquipmentPreview from './EquipmentPreview';
import Equipment from './Equipment';

import { Language } from 'src/types/language';
import takenThings from 'src/data/takenThings';
import lang from 'src/i18n/lang';

import st from './EquipmentWeTakeSection.module.css';

type Props = {
  language: Language;
};

function EquipmentWeTakeSection({ language }: Props) {
  const { largeImgSrc, smallThings } = takenThings();

  return (
    <section className={st.section}>
      <Container>
        <h2 className={st.title}>{lang('WhatElse', language)}</h2>

        <div className={st.wrapper}>
          <EquipmentPreview imageSrc={largeImgSrc} language={language} />

          <Equipment items={smallThings} language={language} />
        </div>
      </Container>
    </section>
  );
}

export default EquipmentWeTakeSection;
