import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { UserEvent } from '@testing-library/user-event';

import ModalWindow from './ModalWindow';

describe('<ModalWindow />', () => {
  let onClose: ReturnType<typeof jest.fn>;
  let user: UserEvent;

  beforeEach(() => {
    onClose = jest.fn();
    user = userEvent.setup();

    render(
      <ModalWindow onClose={onClose}>
        <div>test</div>
      </ModalWindow>
    );
  });

  const closeActions = [
    {
      action: 'clicking the overlay',
      query: () => screen.getByTestId('overlay'),
      trigger: (el: HTMLElement) => user.click(el),
    },
    {
      action: 'pressing the Escape key',
      query: () => null,
      trigger: () => user.keyboard('{Escape}'),
    },
    {
      action: 'clicking the close button',
      query: () => screen.getByTestId('close-button'),
      trigger: (el: HTMLElement) => user.click(el),
    },
  ];

  test('renders the overlay and the child content', () => {
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test.each(closeActions)(
    'calls the onClose handler when $action',
    async ({ query, trigger }) => {
      const element = query();
      await trigger(element);
      expect(onClose).toHaveBeenCalledTimes(1);
    }
  );
});
