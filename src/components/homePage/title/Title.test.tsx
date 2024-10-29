import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('<Title />', () => {
  test('should render the component', () => {
    render(<Title />);

    const title = screen.getByRole('heading', {
      level: 1,
    });

    expect(title).toBeInTheDocument();
  });

  test('title should be "Kavoon"', () => {
    render(<Title />);

    const title = screen.getByRole('heading', {
      level: 1,
    });

    expect(title).toHaveTextContent(/kavoon/i);
  });
});
