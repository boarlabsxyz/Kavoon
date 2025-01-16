import { render, screen, fireEvent } from '@testing-library/react';
import ProductsSorting from './productsSorting';
import { getSortingOptions } from 'src/helpers/getSortingOptions';

jest.mock('src/helpers/getSortingOptions', () => ({
  getSortingOptions: jest.fn(),
}));

jest.mock('src/i18n/lang', () => (key: string) => key); // Mock translation function

describe('ProductsSorting Component', () => {
  const mockHandleSortChange = jest.fn();

  const mockSortingOptions = [
    { value: 'hasTopBadge-desc', label: 'mostPopular' },
    { value: 'createdAt-desc', label: 'newest' },
    { value: 'priceUAH-asc', label: 'lowestPrice' },
    { value: 'priceUAH-desc', label: 'highestPrice' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (getSortingOptions as jest.Mock).mockReturnValue(mockSortingOptions);
  });

  it('should render the component with default selected option', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );

    expect(screen.getByText('mostPopular')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should toggle dropdown visibility on click', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );

    const selectedElement = screen.getByText('mostPopular');
    fireEvent.click(selectedElement);

    expect(screen.getByRole('list')).toBeInTheDocument();
    fireEvent.click(selectedElement);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
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
    expect(screen.getByText('newest')).toBeInTheDocument();
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

    expect(screen.getByRole('list')).toBeInTheDocument();

    const outsideElement = screen.getByTestId('outside-element');
    fireEvent.click(outsideElement);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should pass the correct language to getSortingOptions', () => {
    render(
      <ProductsSorting handleSortChange={mockHandleSortChange} language="en" />
    );
    expect(getSortingOptions).toHaveBeenCalledWith('en', 'mostPopular');
  });
});
