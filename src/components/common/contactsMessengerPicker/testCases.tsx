import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Formik } from 'formik';

import ContactsMessengerPicker from './ContactsMessengerPicker';
import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

const mockOnMessengerChange = jest.fn();
const initialValues = { contactsMessenger: '' };

export const renderComponent = (language: Language) =>
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

export function rendersWithoutCrashingTest(language: Language) {
  test('renders without crashing and shows initial text', () => {
    renderComponent(language);

    expect(
      screen.getByText(translate('SelectFromList', language))
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Messenger picker' })
    ).toBeInTheDocument();
  });
}

export function opensDropdownOnClickTest(language: Language) {
  test('opens dropdown when button is clicked', () => {
    renderComponent(language);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Messenger picker' });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();
  });
}

export function closesDropdownOnSelectionTest(language: Language) {
  test('closes dropdown when an item is selected', () => {
    renderComponent(language);

    const button = screen.getByRole('button', { name: 'Messenger picker' });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();

    const listItem = screen.getByText('Telegram');
    fireEvent.click(listItem);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();
  });
}

export function allowsCustomTextEntryTest(language: Language) {
  test('after choosing messenger allows custom text entry', async () => {
    renderComponent(language);

    const button = screen.getByRole('button', { name: 'Messenger picker' });
    fireEvent.click(button);

    const telegramOption = screen.getByText('Telegram');
    fireEvent.click(telegramOption);

    const inputField = screen.getByPlaceholderText('Username or phone number');
    expect(inputField).toBeInTheDocument();

    await fireEvent.change(inputField, { target: { value: 'Custom Option' } });

    expect(inputField).toHaveValue('Custom Option');
  });
}

export function closesDropdownOnOutsideClickTest(language: Language) {
  test('closes dropdown when clicking outside the component', () => {
    renderComponent(language);

    const button = screen.getByRole('button', { name: 'Messenger picker' });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();

    const outsideElement = screen.getByTestId('outside-element');
    fireEvent.click(outsideElement);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();
  });
}
