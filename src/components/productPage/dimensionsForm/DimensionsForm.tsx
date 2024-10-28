import React, { useEffect, useMemo, useState } from 'react';

import st from './DimensionsForm.module.css';

type Props = {
  parameters: string[];
  selectedSchemeId: string;
  takeDimensionValues: (dimensions: { [key: string]: string }) => void;
  centimeter: string;
};

function DimensionsForm({
  parameters,
  selectedSchemeId,
  takeDimensionValues,
  centimeter,
}: Props) {
  if (!parameters || !parameters.length) {
    throw new Error(
      '[Product dimensions]: Dimensions parameter must not be null or empty'
    );
  }

  const parameterSet: string[] = useMemo(
    () =>
      Array.from(
        new Set(
          parameters.map((inputParameter: string) =>
            inputParameter.toLowerCase()
          )
        )
      ),
    [parameters]
  );

  const initialObject: { [key: string]: string } = useMemo(() => ({}), []);

  parameterSet.forEach((parameter: string) => {
    initialObject[parameter] = '';
  });

  const [dimensions, setDimensions] = useState(initialObject);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDimensions({
      ...dimensions,
      [name]: value,
    });
  };

  useEffect(() => {
    takeDimensionValues(
      parameterSet.reduce<{ [key: string]: string }>(
        (previousValue, currentValue) => ({
          ...previousValue,
          [currentValue.toUpperCase()]: dimensions[currentValue],
        }),
        {}
      )
    );
  }, [parameterSet, dimensions, takeDimensionValues]);

  useEffect(() => {
    setDimensions(initialObject);
  }, [selectedSchemeId, initialObject]);

  return (
    <div className={st.list}>
      {parameterSet.map((parameter) => (
        <div className={st.item} key={parameter}>
          <label className={st.sizeName} htmlFor={parameter}>
            {parameter.toUpperCase()}
          </label>
          <input
            className={st.input}
            id={parameter}
            type="number"
            name={parameter}
            value={dimensions[parameter]}
            placeholder={`0 ${centimeter}`}
            step="0.1"
            min="0"
            onChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  );
}

export default DimensionsForm;
