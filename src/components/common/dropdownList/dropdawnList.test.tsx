import { render, screen, fireEvent } from '@testing-library/react';
import DropdownList from './dropdownList';
import makeMessengersList from 'src/helpers/makeMessengersList'; // Mock this module if needed
import { Language } from 'src/types/language';

describe('DropdownList Component', () => {
  const mockHandleSelect = jest.fn();
  const language = 'en' as Language;
  const pickedItem = { name: 'Telegram' };
  const optionsList = makeMessengersList(language);

  beforeEach(() => {
    mockHandleSelect.mockClear();
    render(
      <DropdownList
        optionsList={optionsList}
        handleSelect={mockHandleSelect}
        pickedItem={pickedItem}
      />
    );
  });

  it('renders the list of options', () => {
    optionsList.forEach((messenger) => {
      expect(screen.getByText(messenger.name)).toBeInTheDocument();
    });
  });

  it('calls handleSelect when a option is clicked', () => {
    const telegramOption = screen.getByText('Telegram');
    fireEvent.click(telegramOption);

    expect(mockHandleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Telegram' })
    );
  });

  it('calls handleSelect when Enter or Space is pressed', () => {
    const telegramOption = screen.getByText('Telegram');
    telegramOption.focus();

    fireEvent.keyDown(telegramOption, { key: 'Enter' });
    expect(mockHandleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Telegram' })
    );
    mockHandleSelect.mockClear();

    fireEvent.keyDown(telegramOption, { key: ' ' });
    expect(mockHandleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Telegram' })
    );
  });

  it('sets aria-selected="true" for the picked item', () => {
    const selectedItem = screen.getByText('Telegram').closest('li');
    expect(selectedItem).toHaveAttribute('aria-selected', 'true');
  });

  it('sets aria-selected="false" for unselected items', () => {
    const unselectedItem = screen.getByText('Viber').closest('li');
    expect(unselectedItem).toHaveAttribute('aria-selected', 'false');
  });
});
