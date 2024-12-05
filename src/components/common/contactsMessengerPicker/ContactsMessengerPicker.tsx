import { useState, useRef, Dispatch } from 'react';

import { Field, FormikErrors, FormikTouched } from 'formik';

import CustomImage from 'src/components/common/customImage';
import DropdownList from 'src/components/common/dropdownList';
import makeMessengersList from 'src/helpers/makeMessengersList';

import useOutsideClick from 'src/hooks/useOutsideClick';
import lang from 'src/i18n/lang';

import st from './ContactsMessengerPicker.module.css';
import { Language } from 'src/types/language';

type Props = {
  input: {
    error?: FormikErrors<string>;
    touched?: FormikTouched<string>;
    onMessengerChange: Dispatch<string>;
    value?: string;
  };
  language: Language;
  remarkText?: boolean;
};

function ContactsMessengerPicker({
  input: { error = null, touched = null, onMessengerChange, value },
  language,
  remarkText,
}: Readonly<Props>) {
  const [isOpened, setOpened] = useState(false);
  const ref = useRef();
  const [pickedItem, setPickedItem] = useState(null);

  useOutsideClick(ref, () => {
    setOpened(false);
  });
  const handleSelect = (item) => {
    setPickedItem(item);
    onMessengerChange(item.name);
    setTimeout(() => {
      setOpened(false);
    }, 50);
  };

  let statusWrapperClassName = isOpened
    ? `${st.statusWrapper} ${st.openedStatusWrapper}`
    : st.statusWrapper;

  if (error && touched) {
    statusWrapperClassName += ` ${st.errorStatusWrapper}`;
  }

  const messengersList = makeMessengersList(language);
  return (
    <div ref={ref}>
      <label htmlFor="numTel" className={st.fieldTitle}>
        {lang('Contacts', language)}
      </label>

      <div className={statusWrapperClassName}>
        <div className={st.status}>
          {pickedItem ? (
            <>
              <CustomImage
                src={pickedItem.src}
                alt="messenger icon"
                width={24}
                height={24}
              />
              <Field
                name="numTel"
                id="numTel"
                type="text"
                placeholder={pickedItem.placeholder}
                autoFocus
                className={st.field}
                data-cy="numTel"
                value={value}
              />
            </>
          ) : (
            <span className={st.initialText}>
              {lang('SelectFromList', language)}
            </span>
          )}
          <button
            type="button"
            className={isOpened ? `${st.moreBtn} ${st.lessBtn}` : st.moreBtn}
            onClick={() => {
              setOpened(!isOpened);
            }}
            aria-label="Messenger picker"
            aria-expanded={isOpened}
            aria-controls="options-list"
            data-cy="messenger-picker"
          />
        </div>
        {isOpened && (
          <DropdownList
            optionsList={messengersList}
            handleSelect={handleSelect}
            pickedItem={pickedItem}
          />
        )}
      </div>
      {remarkText && (
        <p
          className={
            isOpened ? `${st.remarkText} ${st.openedRemarkText}` : st.remarkText
          }
        >
          {lang('NoteCheckMessenger', language)}
        </p>
      )}
    </div>
  );
}

export default ContactsMessengerPicker;
