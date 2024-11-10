import { render, screen, fireEvent } from '@testing-library/react';
import DropdownList from './dropdownList';
import { Messenger, Network } from 'src/types/pickersProps';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
}));

const messengerItem: Messenger = {
  name: 'Messenger Item',
  src: '/path/to/icon.png',
  placeholder: '',
};

const networkItem: Network = {
  name: 'Network Item',
  value: '',
};

const messengersList = [messengerItem];
const networksList = [networkItem];
const mixedList = [messengerItem, networkItem];

describe('DropdownList Component', () => {
  const mockHandleSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Messenger items with an image and text', () => {
    render(
      <DropdownList
        optionsList={messengersList}
        handleSelect={mockHandleSelect}
        pickedItem={null}
      />
    );

    const messenger = screen.getByText(messengerItem.name);
    expect(messenger).toBeInTheDocument();
    const image = screen.getByAltText('option icon');
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('/path/to/icon.png')
    );
  });

  it('renders Network items with text only', () => {
    render(
      <DropdownList
        optionsList={networksList}
        handleSelect={mockHandleSelect}
        pickedItem={null}
      />
    );

    const network = screen.getByText(networkItem.name);
    expect(network).toBeInTheDocument();
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });

  it('calls handleSelect on item click', () => {
    render(
      <DropdownList
        optionsList={mixedList}
        handleSelect={mockHandleSelect}
        pickedItem={null}
      />
    );

    fireEvent.click(screen.getByText(messengerItem.name));
    expect(mockHandleSelect).toHaveBeenCalledWith(messengerItem);

    fireEvent.click(screen.getByText(networkItem.name));
    expect(mockHandleSelect).toHaveBeenCalledWith(networkItem);
  });

  it('handles Enter and Space keys to select an item', () => {
    render(
      <DropdownList
        optionsList={mixedList}
        handleSelect={mockHandleSelect}
        pickedItem={null}
      />
    );

    const listItem = screen.getByText(messengerItem.name);

    fireEvent.keyDown(listItem, { key: 'Enter' });
    expect(mockHandleSelect).toHaveBeenCalledWith(messengerItem);

    fireEvent.keyDown(listItem, { key: ' ' });
    expect(mockHandleSelect).toHaveBeenCalledWith(messengerItem);
  });

  it('handles ArrowDown and ArrowUp keys for navigation', () => {
    render(
      <DropdownList
        optionsList={mixedList}
        handleSelect={mockHandleSelect}
        pickedItem={null}
      />
    );

    const firstItem = screen.getByText(messengerItem.name);
    const secondItem = screen.getByText(networkItem.name);

    firstItem.focus();
    fireEvent.keyDown(firstItem, { key: 'ArrowDown' });
    const focusedLastItem = screen.getByRole('option', {
      name: /network item/i,
    });
    expect(focusedLastItem).toHaveFocus();

    fireEvent.keyDown(secondItem, { key: 'ArrowUp' });
    const focusedFirstItem = screen.getByRole('option', {
      name: /messenger item/i,
    });
    expect(focusedFirstItem).toHaveFocus();
  });

  it('sets aria-selected attribute based on pickedItem', () => {
    render(
      <DropdownList
        optionsList={mixedList}
        handleSelect={mockHandleSelect}
        pickedItem={networkItem}
      />
    );

    const selectedItem = screen.getByText(networkItem.name).closest('li');
    expect(selectedItem).toHaveAttribute('aria-selected', 'true');

    const unselectedItem = screen.getByText(messengerItem.name).closest('li');
    expect(unselectedItem).toHaveAttribute('aria-selected', 'false');
  });
});
