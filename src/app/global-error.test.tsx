import { render, screen, fireEvent } from '@testing-library/react';
import GlobalError from '../app/global-error';
import * as Sentry from '@sentry/nextjs';

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

describe('GlobalError', () => {
  const mockError = new Error('Test error');
  const mockReset = jest.fn();

  it('renders error message and retry button', () => {
    render(<GlobalError error={mockError} reset={mockReset} />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /try one more time/i })
    ).toBeInTheDocument();
  });

  it('calls Sentry.captureException on render', () => {
    render(<GlobalError error={mockError} reset={mockReset} />);
    expect(Sentry.captureException).toHaveBeenCalledWith(mockError);
  });

  it('calls reset function when button is clicked', () => {
    render(<GlobalError error={mockError} reset={mockReset} />);
    fireEvent.click(screen.getByRole('button', { name: /try one more time/i }));
    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
