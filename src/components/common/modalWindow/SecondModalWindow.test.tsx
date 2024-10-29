import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { UserEvent } from '@testing-library/user-event';

import ModalWindow from './SecondModalWindow';

describe('<SecondModalWindow />', () => {
  let onClose: ReturnType<typeof jest.fn>;
  let user: UserEvent;

  beforeEach(() => {
    onClose = jest.fn();
    user = userEvent.setup();

    render(
      <ModalWindow onClose={onClose}>
        <div>test content</div>
      </ModalWindow>
    );
  });

  test('renders the overlay and child content', () => {
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('test content')).toBeInTheDocument();
  });

  test('calls the onClose handler when the close button is clicked', async () => {
    await user.click(screen.getByTestId('close-button'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
