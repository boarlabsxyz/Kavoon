import { render, RenderResult } from '@testing-library/react';

import { Formik } from 'formik';

import ContactsMessengerPicker from './ContactsMessengerPicker';
import { Language } from 'src/types/language';
import {
  rendersWithoutCrashingTest,
  opensDropdownOnClickTest,
  closesDropdownOnSelectionTest,
  allowsCustomTextEntryTest,
  closesDropdownOnOutsideClickTest,
} from 'src/data/testCases/pickerTestCases';

describe('ContactsMessengerPicker Component', () => {
  const mockOnMessengerChange = jest.fn();
  const initialValues = { contactsMessenger: '' };
  const language = 'en' as Language;
  const buttonName = 'Messenger picker';

  const renderComponent = (language: Language): RenderResult =>
    render(
      <>
        <Formik initialValues={initialValues} onSubmit={jest.fn()}>
          <ContactsMessengerPicker
            input={{
              error: null,
              touched: null,
              onMessengerChange: mockOnMessengerChange,
            }}
            language={language}
            remarkText=""
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
  closesDropdownOnSelectionTest(buttonName, 'Telegram');
  allowsCustomTextEntryTest(buttonName, 'Telegram', 'Username or phone number');
  closesDropdownOnOutsideClickTest(buttonName);
});
