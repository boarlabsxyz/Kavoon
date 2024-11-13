import { screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

const language = 'en' as Language;

export function rendersWithoutCrashingTest(buttonName) {
  test('renders without crashing and shows initial text', () => {
    expect(
      screen.getByText(translate('SelectFromList', language))
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: buttonName })
    ).toBeInTheDocument();
  });
}

export function opensDropdownOnClickTest(buttonName) {
  test('opens dropdown when button is clicked', () => {
    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: buttonName });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();
  });
}

export function closesDropdownOnSelectionTest(buttonName, optionName) {
  test('closes dropdown when an item is selected', async () => {
    const button = screen.getByRole('button', { name: buttonName });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();

    const listItem = screen.getByText(optionName);
    await act(async () => {
      fireEvent.click(listItem);
    });
    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();
  });
}

export function allowsCustomTextEntryTest(
  buttonName,
  optionName,
  placeholderText
) {
  test('after choosing messenger allows custom text entry', async () => {
    const button = screen.getByRole('button', { name: buttonName });
    fireEvent.click(button);

    const option = screen.getByText(optionName);
    fireEvent.click(option);

    const inputField = screen.getByPlaceholderText(placeholderText);
    expect(inputField).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(inputField, { target: { value: 'Custom Option' } });
    });

    expect(inputField).toHaveValue('Custom Option');
  });
}

export function closesDropdownOnOutsideClickTest(buttonName) {
  test('closes dropdown when clicking outside the component', () => {
    const button = screen.getByRole('button', { name: buttonName });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();

    const outsideElement = screen.getByTestId('outside-element');
    fireEvent.click(outsideElement);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();
  });
}
