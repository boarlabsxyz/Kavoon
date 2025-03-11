import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog, { generateMetadata } from './page';
import { getPosts } from 'src/services/blog';
import BlogIndexPage from 'src/components/blog/blogIndexPage';

jest.mock('src/services/blog', () => ({
  getPosts: jest.fn(),
}));

jest.mock('src/components/blog/blogIndexPage', () =>
  jest.fn(() => <div data-testid="blog-index-page" />)
);

describe('Blog Page', () => {
  const mockPosts = [
    { slug: 'post-1', title: 'Test Post 1', content: 'Content 1' },
    { slug: 'post-2', title: 'Test Post 2', content: 'Content 2' },
  ];
  const mockLang = 'en';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls getPosts and renders BlogIndexPage with posts and language', async () => {
    (getPosts as jest.Mock).mockResolvedValue(mockPosts);

    const { findByTestId } = render(await Blog({ params: { lang: mockLang } }));

    expect(getPosts).toHaveBeenCalledWith(expect.any(String), mockLang);
    expect(BlogIndexPage).toHaveBeenCalledWith(
      { posts: mockPosts, language: mockLang },
      {}
    );

    expect(await findByTestId('blog-index-page')).toBeInTheDocument();
  });

  test('generateMetadata returns correct canonical URL', () => {
    const metadata = generateMetadata({ params: { lang: 'uk' } });

    expect(metadata).toEqual({
      alternates: {
        canonical: 'https://kavoon.com.ua/uk/blog',
        languages: {
          en: 'https://kavoon.com.ua/en/blog',
          uk: 'https://kavoon.com.ua/uk/blog',
          pl: 'https://kavoon.com.ua/pl/blog',
        },
      },
    });
  });
});
