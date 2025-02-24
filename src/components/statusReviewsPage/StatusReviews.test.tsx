import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StatusReviews from './StatusReviews';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

const mockReviews = [
  {
    _id: '1',
    productName: 'Product 1',
    userName: 'User 1',
    rating: 5,
    date: new Date('2025-02-24').getTime(),
    showOnSite: true,
    reviewLanguage: 'en' as 'en' | 'uk' | 'ru' | 'pl',
    isActive: true,
  },
  {
    _id: '2',
    productName: 'Product 2',
    userName: 'User 2',
    rating: 4,
    date: new Date('2025-02-23').getTime(),
    showOnSite: false,
    reviewLanguage: 'uk' as 'en' | 'uk' | 'ru' | 'pl',
    isActive: true,
  },
];

jest.mock('./ReviewsModerationTable', () => ({
  __esModule: true,
  default: ({
    changeShowOnSite,
  }: {
    changeShowOnSite: (id: string, showOnSite: boolean) => void;
  }) => (
    <button onClick={() => changeShowOnSite('1', true)}>Toggle Show</button>
  ),
}));

describe('StatusReviews', () => {
  it('calls changeShowOnSite when button is clicked', async () => {
    render(<StatusReviews reviews={mockReviews} />);
    const button = screen.getByText('Toggle Show');

    await userEvent.click(button);

    expect(screen.getByText('Toggle Show')).toBeInTheDocument();
  });
});
