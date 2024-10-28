import React, { ReactElement } from 'react';

import CustomImage from 'src/components/common/customImage';
import shimmerUrl from 'src/helpers/shimmerUrl';

import st from './DimensionSchemeImage.module.css';

type Props = {
  id: string;
  imageUrl: string;
  name: string;
  onChange: () => void;
  checked: boolean;
};

function DimensionSchemeImage({
  id,
  imageUrl,
  name,
  onChange,
  checked,
}: Props): ReactElement {
  return (
    <div className={st.wrapper}>
      <input
        className={st.customRadio}
        type="radio"
        id={id}
        value={id}
        onChange={onChange}
        name={name}
        checked={checked}
      />
      <label className={st.customRadioLabel} htmlFor={String(id)}>
        <div className={st.imageContainer}>
          <CustomImage
            src={imageUrl}
            width={220}
            height={153}
            alt="scheme-image"
            placeholder="blur"
            blurDataURL={shimmerUrl}
          />
        </div>
      </label>
    </div>
  );
}

export default DimensionSchemeImage;
