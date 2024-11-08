import React, { useState, useRef, Dispatch } from 'react';

import { Field, FormikErrors, FormikTouched } from 'formik';

import useOutsideClick from 'src/hooks/useOutsideClick';
import lang from 'src/i18n/lang';
import networksList from './networksList';

import st from './howDiscoverPicker.module.css';
import { Language } from 'src/types/language';

type Props = {
  input: {
    error: FormikErrors<string>;
    touched: FormikTouched<string>;
    setHowDiscover: Dispatch<string>;
  };
  language: Language;
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
              value={lang(pickedItem.name, language)}
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
            aria-label="discovery options"
            onClick={() => {
              setOpened(!isOpened);
            }}
            data-cy="howDiscover-picker"
            className={btnClassName}
          />
        </div>
        {isOpened && (
          <ul className={st.list} role="listbox">
            {networksList.map((item) => (
              <li
                onClick={() => handleSelect(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelect(item);
                  }
                }}
                key={item.name}
                className={st.item}
                role="option"
                tabIndex={0}
                aria-selected={pickedItem?.name === item.name}
              >
                <span className={st.itemName}>{lang(item.name, language)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HowDiscoverPicker;
