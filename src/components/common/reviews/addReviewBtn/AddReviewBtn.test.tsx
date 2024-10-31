import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddReviewBtn from './AddReviewBtn';

describe('<AddReviewBtn />', () => {
  it('renders the button with default properties', () => {
    render(<AddReviewBtn>Write a review</AddReviewBtn>);

    const button = screen.getByRole('button', { name: /write a review/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('calls the onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<AddReviewBtn onClick={handleClick}>Write a review</AddReviewBtn>);

    const button = screen.getByRole('button', { name: /write a review/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes additional props to the button element', () => {
    render(<AddReviewBtn disabled>Write a review</AddReviewBtn>);

    const button = screen.getByRole('button', { name: 'write a review' });
    expect(button).toBeDisabled();
  });

  it('renders children correctly', () => {
    render(<AddReviewBtn>Write a review</AddReviewBtn>);

    const button = screen.getByRole('button', { name: /write a review/i });
    expect(button).toHaveTextContent('Write a review');
  });
});
