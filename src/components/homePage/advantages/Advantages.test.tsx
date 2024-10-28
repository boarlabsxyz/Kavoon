import { render, screen } from '@testing-library/react';

import Advantages from './Advantages';

describe('<Advantages />', () => {
  test('should render the component', () => {
    render(<Advantages lang="en" />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('list shoud render 3 items', () => {
    render(<Advantages lang="en" />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
