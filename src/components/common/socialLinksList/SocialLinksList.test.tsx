import { render, screen } from '@testing-library/react';

import SocialLinksList from './SocialLinksList';

const links = [
  { label: 'facebook-link', url: 'https://facebook.com/kavoonbags/' },
  { label: 'instagram-link', url: 'https://instagram.com/kavoonbags/' },
  {
    label: 'tiktok-link',
    url: 'https://www.tiktok.com/@kavoonbags?_t=8VEchK4sYFB&_r=1',
  },
];

describe('<SocialLinksList />', () => {
  test('should render the component', () => {
    render(<SocialLinksList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('should have length 3', () => {
    render(<SocialLinksList />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test.each(links)('should render appropriate icons', ({ label, url }) => {
    render(<SocialLinksList />);

    const link = screen.getByRole('link', {
      name: label,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', url);
  });
});
