import translate from 'src/i18n/lang';

import { render, RenderResult } from '@testing-library/react';

import { Formik } from 'formik';

import HowDiscoverPicker from './howDiscoverPicker';
import { Language } from 'src/types/language';
import {
  rendersWithoutCrashingTest,
  opensDropdownOnClickTest,
  closesDropdownOnSelectionTest,
  allowsCustomTextEntryTest,
  closesDropdownOnOutsideClickTest,
} from 'src/data/testCases/pickerTestCases';

describe('HowDiscoverPicker Component', () => {
  const mockOnMessengerChange = jest.fn();
  const initialValues = { contactsMessenger: '' };
  const language = 'en' as Language;
  const buttonName = 'discovery options';

  const renderComponent = (language: Language): RenderResult =>
    render(
      <>
        <Formik initialValues={initialValues} onSubmit={jest.fn()}>
          <HowDiscoverPicker
            input={{
              error: null,
              touched: null,
              setHowDiscover: mockOnMessengerChange,
            }}
            language={language}
          />
        </Formik>
        <div data-testid="outside-element">Outside</div>
      </>
    );
  beforeEach(() => {
    renderComponent(language);
    mockOnMessengerChange.mockClear();
  });

  rendersWithoutCrashingTest(buttonName);
  opensDropdownOnClickTest(buttonName);
  closesDropdownOnSelectionTest(buttonName, 'Tiktok');
  allowsCustomTextEntryTest(
    buttonName,
    'Other',
    translate('EnterYourOwnOption', language)
  );
  closesDropdownOnOutsideClickTest(buttonName);
});
