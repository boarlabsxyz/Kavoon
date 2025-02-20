import sitemap from './sitemap';
import { getAllProducts } from 'src/helpers/getProducts';
import { getPosts } from 'src/services/blog';

jest.mock('src/helpers/getProducts', () => ({
  getAllProducts: jest.fn(),
}));

jest.mock('src/services/blog', () => ({
  getPosts: jest.fn(),
}));

jest.mock('src/data/routes', () => {
  const mockLanguages = [{ locale: 'en' }, { locale: 'uk' }, { locale: 'pl' }];

  return {
    languages: mockLanguages,
  };
});

describe('sitemap', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();

    (getAllProducts as jest.Mock).mockReturnValue([
      { id: 'product-1', category: 'Category 1' },
      { id: 'product-2', category: 'Category 2' },
    ]);

    (getPosts as jest.Mock).mockResolvedValueOnce([
      { slug: 'post-1' },
      { slug: 'post-2' },
    ]);
    (getPosts as jest.Mock).mockResolvedValueOnce([]);
    (getPosts as jest.Mock).mockResolvedValueOnce([]);
  });

  it('should return correct sitemap structure', async () => {
    const result = await sitemap();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    result.forEach((entry) => {
      expect(entry).toMatchObject({
        url: expect.stringMatching(/^https?:\/\//),
        lastModified: expect.any(Object),
        changeFrequency: expect.stringMatching(
          /^(always|hourly|daily|weekly|monthly|yearly|never)$/
        ),
        priority: expect.any(Number),
      });
    });
  });

  it('should call getAllProducts and getPosts', async () => {
    await sitemap();

    expect(getAllProducts).toHaveBeenCalledTimes(1);
    expect(getPosts).toHaveBeenCalledTimes(3);
  });

  it('should correctly handle no products or posts', async () => {
    (getAllProducts as jest.Mock).mockReturnValue([]);
    (getPosts as jest.Mock).mockResolvedValue([]);

    const result = await sitemap();
    const languages = ['en', 'uk', 'pl'];
    const routes = ['/about-us', '/policy', '/delivery-and-payment'];

    const expectedStaticRoutes = languages.length * routes.length;
    const actualStaticRoutes = result.filter((route) =>
      routes.some((r) => route.url.includes(r))
    );

    expect(actualStaticRoutes).toHaveLength(expectedStaticRoutes);
  });
});
