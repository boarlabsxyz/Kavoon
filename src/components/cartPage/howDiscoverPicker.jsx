import React, { useState, useRef } from 'react';

import { Field } from 'formik';

import useOutsideClick from 'src/hooks/useOutsideClick';
import lang from 'src/i18n/lang';

function HowDiscoverPicker({
  input: { error = null, touched = null, setHowDiscover },
  language,
}) {
  const [isOpened, setOpened] = useState(false);
  const ref = useRef();
  const [pickedItem, setPickedItem] = useState(null);
  const [value, setValue] = useState('');
  const networksList = [
    {
      name: 'Tiktok',
      value: 'Tiktok',
    },
    {
      name: 'Linkedin',
      value: 'Linkedin',
    },
    {
      name: 'Instagram',
      value: 'Instagram',
    },
    {
      name: 'Facebook',
      value: 'Facebook',
    },
    {
      name: 'Other',
      value: '',
    },
  ];
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

  return (
    <>
      <div className="wizard__picker-param" id="HowDiscoverPicker">
        <label className="param__general-title">
          {lang('HowDiscover', language)}
        </label>

        <div
          className={
            error && touched
              ? 'picker-param__status error'
              : 'picker-param__status'
          }
          ref={ref}
        >
          <div className="picker-param__status-main">
            {pickedItem?.name === 'Other' && (
              <Field
                name="howDiscover"
                id="howDiscover"
                type="text"
                value={value}
                onChange={handleChange}
                className="how-discover-option"
                placeholder={lang('EnterYourOwnOption', language)}
              />
            )}
            {pickedItem && pickedItem.name !== 'Other' && (
              <Field
                name="howDiscover"
                id="howDiscover"
                type="text"
                value={lang(pickedItem.name, language)}
                className="how-discover-option"
              />
            )}
            {!pickedItem && (
              <span className="param__status-choose__title">
                {lang('SelectFromList', language)}
              </span>
            )}
            <button
              id="picker-param__status-more"
              type="button"
              aria-label="Toggle options list"
              onClick={() => {
                setOpened(!isOpened);
              }}
              data-cy="howDiscover-picker"
            />
          </div>
          <div className="line" />
          <ul className="picker-param__status-list">
            {networksList.map((item) => (
              <li
                onClick={handleSelect.bind(null, item)}
                key={item.name}
                className="list-elem"
              >
                <span className="param__status-list__title">
                  {lang(item.name, language)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .line {
            border-bottom: 1px solid var(--border-color);
            width: calc(100% + 30px);
            margin-left: -15px;
          }
          .wizard__picker-param {
            max-width: inherit;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            color: var(--main-text-color);
            margin-bottom: 0px;
          }
          .picker-param__status {
            position: absolute;
            width: 100%;
            max-width: inherit;
            max-height: ${isOpened ? 1000 : 50}px;
            border: solid 1px #b9c6dc;
            border-radius: 12px;
            background-color: var(--white);
            flex-direction: column;
            align-items: flex-start;
            overflow: hidden;
            transition: 0.3s ease;
            z-index: 2;
            box-shadow: 0 16px 45px -30px rgba(12, 32, 60, 0.14);
            padding: 0 15px;
            line-height: 1.25;
          }
          .picker-param__status:focus-within {
            border-color: var(--primary-color);
          }
          .picker-param__status-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .param__general-title {
            display: block;
            height: 15px;
            font-size: 12px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            color: var(--second-text-color);
            margin-bottom: 5px;
          }
          .list-elem {
            cursor: pointer;
          }
          .list-elem:hover {
            color: var(--primary-color);
          }
          .param__status-choose__title {
            padding: 15px 0;
            color: var(--border-color);
          }
          #picker-param__status-more {
            flex-shrink: 0;
            border-width: 0;
            width: 25px;
            cursor: pointer;
            background: transparent;
            outline: none;
            padding: 25px 5px;
          }
          #picker-param__status-more:before {
            content: '';
            position: absolute;
            height: 9px;
            width: 15px;
            background-image: url('/icons/more-icon.svg');
            margin-left: 0px;
            margin: -4.5px 0 0 -8px;
            transition: 0.5s ease;
            transform: ${isOpened ? 'rotate(180deg)' : ''};
          }
          .picker-param__status-list {
            list-style: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0px;
            padding: 13px 0;
            overflow-y: auto;
          }
          .picker-param__status-list::-webkit-scrollbar-button {
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
            display: none;
          }
          .picker-param__status-list::-webkit-scrollbar-track {
            background-color: transparent;
          }
          .picker-param__status-list::-webkit-scrollbar-thumb {
            -webkit-border-radius: 2, 5px;
            border-radius: 2.5px;
            background-color: #ced5e1;
          }
          .picker-param__status-list::-webkit-scrollbar-thumb:hover {
            background-color: #ced5e1;
          }
          .picker-param__status-list::-webkit-resizer {
            background-image: url('');
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
          }
          .picker-param__status-list::-webkit-scrollbar {
            width: 5px;
          }
          .picker-param__status-list li {
            font-size: 16px;
            display: flex;
            align-items: center;
          }
          .picker-param__status-list li:not(:last-child) {
            margin-bottom: 13px;
          }
          .param__status-list__title {
            display: flex;
            margin-top: 4px;
            margin-left: 5px;
          }
          .param__status-list__title::before {
            content: '';
            display: inline-block;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            margin-right: 10px;
            border: 1px solid #93a1b9;
          }
          .picker-param__status error {
            border-color: #d21818;
          }
          .error {
            border-color: #d21818;
            transition: 0.3s ease;
          }
        `}
      </style>
      <style jsx global>
        {`
          .how-discover-option {
            border: 0;
            outline: none;
            width: 100%;
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
}
export default HowDiscoverPicker;
