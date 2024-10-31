import InfoSectionVM from 'src/data/viewModels/shop/infoSectionVM';
import { CUSTOMER_PARAMETERS } from 'src/data/constants';
import { makeFieldsForInfoSection } from 'src/helpers/makeFields';
import { Language } from 'src/types/language';
import { Field } from 'src/types/product';
import translate from 'src/i18n/lang';

import st from './ProductDetailsSpecification.module.css';

type Props = {
  vm: InfoSectionVM;
  language: Language;
};

function ProductDetailsSpecification({ vm, language }: Props) {
  const fields = makeFieldsForInfoSection(language);

  const makeParameter = (value, field, language, unitOfMeasure = '') => {
    if (value === CUSTOMER_PARAMETERS) {
      return translate(value, language);
    }
    if (typeof value === 'number' && field === 'weight') {
      return `${value} ${translate('Gram', language)}`;
    }
    if (field === 'size' || field === 'weight') {
      return value;
    }
    if (unitOfMeasure === '') {
      return translate(value, language);
    }
    return value;
  };

  const Parameter = ({ name, value, field, language, unitOfMeasure }) => {
    if (typeof value === 'object') {
      return (
        <div className={st.specificationParameter}>
          {`${name}: `}
          {vm[field].map(({ fabric, weight }) => (
            <div key={fabric} className={st.parameterValue}>
              {translate(fabric, language)} {'- '}
              {`${weight} ${translate('Gram', language)}`}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={st.specificationParameter}>
        {`${name}: `}
        <span className={st.parameterValue}>
          {makeParameter(value, field, language, unitOfMeasure)}{' '}
          {value !== CUSTOMER_PARAMETERS && unitOfMeasure}
          {vm.sizeOfTheClosedBag &&
            field !== 'description' &&
            ` (${translate('SizeOfTheClosedBag', language)})`}
        </span>
      </div>
    );
  };

  const makeSpecificationDetails = (fields) =>
    fields
      .filter(({ field }) => vm[field])
      .map((field: Field) => (
        <Parameter
          key={field.name}
          name={field.name}
          value={vm[field.field]}
          field={field.field}
          language={language}
          unitOfMeasure={field.unitOfMeasure}
        />
      ));

  const specificationDetails = makeSpecificationDetails(fields);

  return (
    <>
      <div className={st.specificationWrapper}>
        <h2 className={st.specificationTitle}>
          {translate('ProductCharacteristic', language)}:
        </h2>
        <div>{specificationDetails}</div>
        <div className={st.conclusion}>
          {translate(vm.conclusion, language)}
        </div>
      </div>
    </>
  );
}

export default ProductDetailsSpecification;
