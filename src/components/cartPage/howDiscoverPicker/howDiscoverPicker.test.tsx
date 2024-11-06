import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Formik } from 'formik';

import HowDiscoverPicker from './howDiscoverPicker';
import { Language } from 'src/types/language';
import translate from 'src/i18n/lang';

describe('HowDiscoverPicker Component', () => {
  const mockSetHowDiscover = jest.fn();
  const initialValues = { howDiscover: '' };
  const language = 'en' as Language;

  const renderComponent = (language: Language) =>
    render(
      <>
        <Formik initialValues={initialValues} onSubmit={jest.fn()}>
          <HowDiscoverPicker
            input={{
              error: null,
              touched: null,
              setHowDiscover: mockSetHowDiscover,
            }}
            language={language}
          />
        </Formik>
        <div data-testid="outside-element">Outside</div>
      </>
    );

  beforeEach(() => {
    mockSetHowDiscover.mockClear();
  });

  test('renders without crashing and shows initial text', () => {
    renderComponent(language);

    expect(
      screen.getByText(translate('SelectFromList', language))
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'discovery options' })
    ).toBeInTheDocument();
  });

  test('opens dropdown when button is clicked', () => {
    renderComponent(language);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'discovery options' });
    fireEvent.click(button);

    const openedList = screen.getByRole('listbox');
    expect(openedList).toBeInTheDocument();
  });

  test('closes dropdown when an item is selected', () => {
    renderComponent(language);

    const button = screen.getByRole('button', { name: 'discovery options' });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();

    const listItem = screen.getByText('Tiktok');
    fireEvent.click(listItem);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();
  });

  test('sets "Other" as input field and allows custom text entry', () => {
    renderComponent(language);

    const button = screen.getByRole('button', { name: 'discovery options' });
    fireEvent.click(button);

    const otherOption = screen.getByText('Other');
    fireEvent.click(otherOption);

    const customInput = screen.getByPlaceholderText('Enter your own option');
    expect(customInput).toBeInTheDocument();

    fireEvent.change(customInput, { target: { value: 'Custom Option' } });
    expect(mockSetHowDiscover).toHaveBeenCalledWith('Custom Option');
  });

  test('closes dropdown when clicking outside the component', () => {
    renderComponent(language);

    const button = screen.getByRole('button', { name: 'discovery options' });
    fireEvent.click(button);

    const openedList = screen.queryByRole('listbox');
    expect(openedList).toBeInTheDocument();

    const outsideElement = screen.getByTestId('outside-element');
    fireEvent.click(outsideElement);

    const closedList = screen.queryByRole('listbox');
    expect(closedList).not.toBeInTheDocument();
  });
});
