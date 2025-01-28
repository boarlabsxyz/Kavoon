import { render, screen } from '@testing-library/react';

import SocialLinksList from './SocialLinksList';

const links = [
  {
    ariaLabelContent: 'Visit our Facebook profile',
    url: 'https://facebook.com/kavoonbags/',
  },
  {
    ariaLabelContent: 'Visit our Instagram profile',
    url: 'https://instagram.com/kavoonbags/',
  },
  {
    ariaLabelContent: 'Visit our TikTok Profile',
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

  test.each(links)(
    'should render appropriate icons',
    ({ ariaLabelContent, url }) => {
      render(<SocialLinksList />);

      const link = screen.getByRole('link', {
        name: ariaLabelContent,
      });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', url);
    }
  );
});
