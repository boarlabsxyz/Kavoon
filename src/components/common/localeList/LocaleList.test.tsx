import { render, screen } from '@testing-library/react';

import LocaleList from './LocaleList';

jest.mock('next/navigation', () => ({
  usePathname() {
    return '/en/blog';
  },

  useParams() {
    return {
      lang: 'en',
    };
  },
}));

describe('<LocaleList />', () => {
  test('should render the component', () => {
    render(<LocaleList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('should have have 3 locales', () => {
    render(<LocaleList />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
