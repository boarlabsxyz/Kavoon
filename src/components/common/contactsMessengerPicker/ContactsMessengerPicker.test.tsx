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
  const initialValues = { numTel: '' };
  const language = 'en' as Language;
  const buttonName = 'Messenger picker';

  const renderComponent = (): RenderResult =>
    render(
      <>
        <Formik initialValues={initialValues} onSubmit={jest.fn()}>
          {({ setFieldValue, values }) => (
            <ContactsMessengerPicker
              input={{
                error: null,
                touched: null,
                onMessengerChange: (value) => {
                  setFieldValue('numTel', value);
                  mockOnMessengerChange(value);
                },
                value: values.numTel,
              }}
              language={language}
            />
          )}
        </Formik>
        <div data-testid="outside-element">Outside</div>
      </>
    );

  beforeEach(() => {
    renderComponent();
    mockOnMessengerChange.mockClear();
  });

  rendersWithoutCrashingTest(buttonName);
  opensDropdownOnClickTest(buttonName);
  closesDropdownOnSelectionTest(buttonName, 'Telegram');
  allowsCustomTextEntryTest(buttonName, 'Telegram', 'Username or phone number');
  closesDropdownOnOutsideClickTest(buttonName);
});
