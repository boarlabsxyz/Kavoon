import { render, screen, fireEvent } from '@testing-library/react';
import ProductsSorting from './productsSorting';
import { getSortingOptions } from 'src/helpers/getSortingOptions';

jest.mock('src/helpers/getSortingOptions', () => ({
  getSortingOptions: jest.fn(),
}));

jest.mock('src/i18n/lang', () => (key: string) => key);

describe('ProductsSorting Component', () => {
  const mockHandleSortChange = jest.fn();

  beforeEach(() => {
    mockHandleSortChange.mockClear();
    (getSortingOptions as jest.Mock).mockImplementation((language, label) => {
      const currentPrice = language === 'uk' ? 'priceUAH' : 'priceEURO';
      return [
        { value: 'mostPopular', label: 'mostPopular' },
        { value: 'createdAt-desc', label: 'newest' },
        { value: `${currentPrice}-asc`, label: 'lowestPrice' },
        { value: `${currentPrice}-desc`, label: 'highestPrice' },
      ].filter((option) => option.label !== label);
    });
  });

  it('should render the component with default selected option', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );

    expect(screen.getByText('mostPopular')).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).toHaveAttribute(
      'class',
      'optionsHidden'
    );
  });

  it('should toggle dropdown visibility on click', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );

    const selectedElement = screen.getByText('mostPopular');
    expect(screen.queryByRole('listbox')).toHaveAttribute(
      'class',
      'optionsHidden'
    );
    fireEvent.click(selectedElement);
    expect(screen.queryByRole('listbox')).not.toHaveAttribute(
      'class',
      'optionsHidden'
    );
    fireEvent.click(selectedElement);

    expect(screen.queryByRole('listbox')).toHaveAttribute(
      'class',
      'optionsHidden'
    );
  });

  it('should call handleSortChange and update selected option on option click', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );

    const selectedElement = screen.getByText('mostPopular');
    fireEvent.click(selectedElement);

    const newOption = screen.getByText('newest');
    fireEvent.click(newOption);

    expect(mockHandleSortChange).toHaveBeenCalledWith('createdAt-desc');
  });

  it('should close the dropdown when clicking outside', () => {
    const { container } = render(
      <div>
        <ProductsSorting
          handleSortChange={mockHandleSortChange}
          language="en"
        />
        <div data-testid="outside-element">Outside</div>
      </div>
    );

    const selectedElement = screen.getByText('mostPopular');
    fireEvent.click(selectedElement);

    const outsideElement = screen.getByTestId('outside-element');
    fireEvent.click(outsideElement);

    expect(screen.queryByRole('listbox')).toHaveAttribute(
      'class',
      'optionsHidden'
    );
  });

  it('should pass the correct language to getSortingOptions', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );
    expect(getSortingOptions).toHaveBeenCalledWith('en', 'mostPopular');
  });

  it('should support keyboard navigation', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );

    const dropdownButton = screen.getByText('mostPopular');
    fireEvent.click(dropdownButton);

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);

    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    expect(options[0]).toHaveFocus();

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    expect(options[1]).toHaveFocus();

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    expect(options[2]).toHaveFocus();

    fireEvent.keyDown(document, { key: 'ArrowUp' });
    expect(options[1]).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Enter' });
    expect(mockHandleSortChange).toHaveBeenCalledWith('priceEURO-asc');
  });
});
