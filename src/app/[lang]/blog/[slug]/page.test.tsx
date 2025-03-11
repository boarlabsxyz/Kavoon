import PostPage, { generateStaticParams, generateMetadata } from './page';
import { Language } from 'src/types/language';

import { getPostsNames } from 'src/services/blog';
import { render } from '@testing-library/react';

jest.mock('src/services/blog', () => ({
  getPostsNames: jest.fn(),
}));

jest.mock('src/components/blog/postIndexPage', () =>
  jest.fn(() => <div>Mocked PostIndexPage</div>)
);

describe('Blog Post Page', () => {
  describe('generateStaticParams', () => {
    it('should return the correct params', async () => {
      (getPostsNames as jest.Mock).mockResolvedValue(['post-1', 'post-2']);

      const result = await generateStaticParams();
      expect(result).toEqual([{ slug: 'post-1' }, { slug: 'post-2' }]);
    });
  });

  describe('generateMetadata', () => {
    it('should return correct metadata', async () => {
      const params = { lang: 'en' as Language, slug: 'test-post' };
      const metadata = await generateMetadata({ params });

      expect(metadata).toEqual({
        alternates: {
          canonical: 'https://kavoon.com.ua/en/blog/test-post',
          languages: {
            en: 'https://kavoon.com.ua/en/blog/test-post',
            uk: 'https://kavoon.com.ua/uk/blog/test-post',
            pl: 'https://kavoon.com.ua/pl/blog/test-post',
          },
        },
      });
    });
  });

  describe('PostPage component', () => {
    it('should render the PostIndexPage component', async () => {
      const { getByText } = render(
        await PostPage({ params: { lang: 'uk', slug: 'test-post' } })
      );

      expect(getByText('Mocked PostIndexPage')).toBeInTheDocument();
    });
  });
});
