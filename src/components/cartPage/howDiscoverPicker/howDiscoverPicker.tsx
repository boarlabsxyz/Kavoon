import React, { useState, useRef, Dispatch } from 'react';

import { Field, FormikErrors, FormikTouched } from 'formik';

import useOutsideClick from 'src/hooks/useOutsideClick';
import lang from 'src/i18n/lang';
import makeNetworksList from 'src/helpers/makeNetworksList';

import st from './howDiscoverPicker.module.css';
import { Language } from 'src/types/language';
import DropdownList from 'src/components/common/dropdownList';

type Props = {
  readonly input: {
    readonly error: FormikErrors<string>;
    readonly touched: FormikTouched<string>;
    readonly setHowDiscover: Dispatch<string>;
  };
  readonly language: Language;
};

function HowDiscoverPicker({
  input: { error = null, touched = null, setHowDiscover },
  language,
}: Props) {
  const [isOpened, setOpened] = useState(false);
  const ref = useRef();
  const [pickedItem, setPickedItem] = useState(null);
  const [value, setValue] = useState('');

  useOutsideClick(ref, () => {
    setOpened(false);
  });

  const handleSelect = (item) => {
    setOpened(false);
    setPickedItem(item);
    setHowDiscover(item.value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setHowDiscover(event.target.value);
  };

  const statusWrapperClassName = isOpened
    ? `${st.statusWrapper} ${st.openedStatusWrapper}`
    : st.statusWrapper;

  const btnClassName = isOpened ? `${st.moreBtn} ${st.lessBtn}` : st.moreBtn;

  const networksList = makeNetworksList(language);

  return (
    <div ref={ref} className={st.wrapper}>
      <label className={st.fieldTitle}>{lang('HowDiscover', language)}</label>
      <div className={statusWrapperClassName}>
        <div className={st.status}>
          {pickedItem?.name === 'Other' && (
            <Field
              name="howDiscover"
              id="howDiscover"
              type="text"
              value={value}
              onChange={handleChange}
              className={st.field}
              placeholder={lang('EnterYourOwnOption', language)}
            />
          )}
          {pickedItem && pickedItem.name !== 'Other' && (
            <Field
              name="howDiscover"
              id="howDiscover"
              type="text"
              value={pickedItem.value}
              className={st.field}
            />
          )}
          {!pickedItem && (
            <span className={st.initialText}>
              {lang('SelectFromList', language)}
            </span>
          )}
          <button
            type="button"
            className={btnClassName}
            onClick={() => {
              setOpened(!isOpened);
            }}
            aria-label="discovery options"
            aria-expanded={isOpened}
            aria-controls="options-list"
            data-cy="howDiscover-picker"
          />
        </div>
        {isOpened && (
          <DropdownList
            optionsList={networksList}
            handleSelect={handleSelect}
            pickedItem={pickedItem}
          />
        )}
      </div>
    </div>
  );
}

export default HowDiscoverPicker;
