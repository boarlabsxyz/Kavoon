import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './AboutUs';

jest.mock('src/components/common/customImage', () => () => (
  <div data-testid="custom-image" />
));

jest.mock('src/helpers/shimmerUrl', () => 'mock-shimmer-url');

describe('AboutUs Component', () => {
  const mockDictionary = {
    title: 'Про нас',
    subtitle: 'Дізнайтеся більше про нашу історію, бренд і дизайн.',
    ourHistory: 'Наша історія',
    ourHistoryText: 'Текст про історію компанії.',
    brandCreation: 'Створення бренду',
    brandCreationText: 'Текст про створення бренду.',
    uniqueDesign: 'Унікальний дизайн',
    uniqueDesignText: 'Текст про унікальний дизайн.',
  };

  it('renders the title correctly', () => {
    render(<AboutUs dictionary={mockDictionary} />);

    expect(screen.getByText('ПРО')).toBeInTheDocument();
    expect(screen.getByText('НАС')).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    render(<AboutUs dictionary={mockDictionary} />);
    expect(screen.getByText(mockDictionary.subtitle)).toBeInTheDocument();
  });

  it('renders three about us items', () => {
    render(<AboutUs dictionary={mockDictionary} />);
    expect(screen.getAllByTestId('custom-image')).toHaveLength(3);
  });

  it('renders correct text for each about us item', () => {
    render(<AboutUs dictionary={mockDictionary} />);

    expect(screen.getByText(mockDictionary.ourHistory)).toBeInTheDocument();
    expect(screen.getByText(mockDictionary.ourHistoryText)).toBeInTheDocument();

    expect(screen.getByText(mockDictionary.brandCreation)).toBeInTheDocument();
    expect(
      screen.getByText(mockDictionary.brandCreationText)
    ).toBeInTheDocument();

    expect(screen.getByText(mockDictionary.uniqueDesign)).toBeInTheDocument();
    expect(
      screen.getByText(mockDictionary.uniqueDesignText)
    ).toBeInTheDocument();
  });
});
