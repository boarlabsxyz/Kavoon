import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import IReview from 'src/types/review';
import '@testing-library/jest-dom';
import StatusReviewsPage from './page';

jest.mock('src/components/statusReviewsPage/StatusReviews', () => {
  return function MockStatusReviews({ reviews = [] as IReview[] }) {
    return <div>Mocked StatusReviews - {reviews.length} reviews</div>;
  };
});

global.fetch = jest.fn() as jest.Mock;

describe('StatusReviewsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders password input when not authenticated', () => {
    render(<StatusReviewsPage />);
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
  });

  it('shows an alert on incorrect password', () => {
    window.alert = jest.fn();
    render(<StatusReviewsPage />);
    fireEvent.change(screen.getByPlaceholderText('Enter password'), {
      target: { value: 'wrongpassword' },
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(window.alert).toHaveBeenCalledWith('Incorrect password');
  });

  it('authenticates and fetches reviews on correct password', async () => {
    process.env.NEXT_PUBLIC_REVIEWS_TOKEN = 'correctpassword';
    const mockReviews = { data: [{ id: 1, content: 'Great review' }] };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockReviews,
    });

    render(<StatusReviewsPage />);
    fireEvent.change(screen.getByPlaceholderText('Enter password'), {
      target: { value: 'correctpassword' },
    });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(
        screen.getByText('Mocked StatusReviews - 1 reviews')
      ).toBeInTheDocument()
    );
  });

  it('displays an error message on fetch failure', async () => {
    process.env.NEXT_PUBLIC_REVIEWS_TOKEN = 'correctpassword';
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false, status: 500 });

    render(<StatusReviewsPage />);
    fireEvent.change(screen.getByPlaceholderText('Enter password'), {
      target: { value: 'correctpassword' },
    });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(screen.getByText(/Error loading reviews/)).toBeInTheDocument()
    );
  });
});
