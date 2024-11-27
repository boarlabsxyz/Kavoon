import CustomImage from 'src/components/common/customImage';
import ShowComplect from './ShowComplect';

import { Language } from 'src/types/language';
import shimmerUrl from 'src/helpers/shimmerUrl';
import lang from 'src/i18n/lang';

import st from './EquipmentPreview.module.css';

type Props = {
  imageSrc: string;
  language: Language;
};

function EquipmentPreview({ imageSrc, language }: Props) {
  return (
    <div className={st.wrapper}>
      <CustomImage
        className={st.img}
        src={imageSrc}
        alt={lang('BigBikeImg', language)}
        width={600}
        height={360}
        placeholder="blur"
        blurDataURL={shimmerUrl}
      />
      <p className={st.title}>{lang('HowAbout', language)}</p>
      <ShowComplect />
    </div>
  );
}

export default EquipmentPreview;
