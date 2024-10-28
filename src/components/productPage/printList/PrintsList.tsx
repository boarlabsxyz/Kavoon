import React from 'react';

import { BehaviorSubject } from 'rxjs';

import CustomImage from 'src/components/common/customImage';

import lang from 'src/i18n/lang';
import shimmerUrl from 'src/helpers/shimmerUrl';
import { Language } from 'src/types/language';
import { FabricColorPrint } from 'src/data/data/fabrics/fabrics';

import st from './PrintsList.module.css';

type Props = {
  printsList: FabricColorPrint[];
  currentImage: BehaviorSubject<{
    largeImgSrc: string;
    name: string;
    smallImgSrc: string;
  }>;
  language: Language;
};

function PrintsList({ printsList, currentImage, language }: Props) {
  return (
    <ul className={st.list}>
      {printsList.map((item) => (
        <li className={st.item} key={item.name}>
          <CustomImage
            src={item.smallImgSrc}
            alt={item.name}
            onClick={() => {
              currentImage.next(item);
            }}
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={shimmerUrl}
            className={st.img}
          />
          {item.name === 'without_print' && (
            <p className={st.withoutPrintText}>
              {lang('without_print', language)}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default PrintsList;
