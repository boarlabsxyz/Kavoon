import React, { useState } from 'react';

import DimensionSchemeImage from './DimensionSchemeImage';
import DimensionsForm from 'src/components/productPage/dimensionsForm';

import st from './ProductDetailsWizardDimension.module.css';

type Props = {
  vm: {
    customSizeParameters: any;
    hintText: string;
    centimeter: string;
    enterDimensionsText: string;
  };
  takeDimensions: (dimensions: { [key: string]: string }) => void;
};

function ProductDetailsWizardDimension({ vm, takeDimensions }: Props) {
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('');

  return (
    <div>
      <p className={st.text}>{vm.enterDimensionsText}</p>

      <div className={st.frameDimensionsWrapper}>
        <div className={st.schemeImagesContainer}>
          {vm.customSizeParameters.map((scheme) => (
            <DimensionSchemeImage
              name="scheme-images"
              key={scheme.scheme_id}
              id={scheme.scheme_id}
              imageUrl={scheme.schemeImageSrc}
              onChange={() => setSelectedSchemeId(scheme.scheme_id)}
              checked={selectedSchemeId === scheme.scheme_id}
            />
          ))}
        </div>
        {selectedSchemeId !== '' && (
          <DimensionsForm
            parameters={
              vm.customSizeParameters.find(
                (element) => element.scheme_id === selectedSchemeId
              )?.parameters
            }
            selectedSchemeId={selectedSchemeId}
            takeDimensionValues={takeDimensions}
            centimeter={vm.centimeter}
          />
        )}
      </div>

      <p className={st.hintText}>{vm.hintText}</p>
    </div>
  );
}

export default ProductDetailsWizardDimension;
