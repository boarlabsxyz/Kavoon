import { useState, useRef, Dispatch } from 'react';

import { Field, FormikErrors, FormikTouched } from 'formik';

import CustomImage from 'src/components/common/customImage';

import MessengersList from './MessengersList';
import useOutsideClick from 'src/hooks/useOutsideClick';
import lang from 'src/i18n/lang';

import st from './ContactsMessengerPicker.module.css';
import { Language } from 'src/types/language';

type Props = {
  input: {
    error: FormikErrors<string>;
    touched: FormikTouched<string>;
    onMessengerChange: Dispatch<string>;
  };
  language: Language;
  remarkText: string;
};

function ContactsMessengerPicker({
  input: { error = null, touched = null, onMessengerChange },
  language,
  remarkText,
}: Props) {
  const [isOpened, setOpened] = useState(false);
  const ref = useRef();
  const [pickedItem, setPickedItem] = useState(null);

  const messengersList = MessengersList(language);

  useOutsideClick(ref, () => {
    setOpened(false);
  });
  const handleSelect = (item) => {
    setOpened(false);
    setPickedItem(item);
    onMessengerChange(item.name);
  };

  let statusWrapperClassNames = st.statusWrapper;
  if (error && touched) {
    statusWrapperClassNames += ` ${st.errorStatusWrapper}`;
  }

  return (
    <div ref={ref}>
      <label className={st.fieldTitle}>{lang('Contacts', language)}</label>

      <div className={statusWrapperClassNames}>
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
              />
            </>
          ) : (
            <span className={st.initialText}>
              {lang('SelectFromList', language)}
            </span>
          )}
          <button
            className={isOpened ? `${st.moreBtn} ${st.lessBtn}` : st.moreBtn}
            type="button"
            aria-label="Messenger picker"
            onClick={() => {
              setOpened(!isOpened);
            }}
            data-cy="massager-picker"
          />
        </div>
        {isOpened && (
          <ul className={st.list} role="listbox">
            {messengersList.map((item) => (
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
                <CustomImage
                  src={item.src}
                  alt="messenger icon"
                  width={35}
                  height={35}
                />
                <span className={st.itemName}>{item.name}</span>
              </li>
            ))}
          </ul>
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
