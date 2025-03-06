import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';
import ReviewsSection from 'src/components/common/reviewsSection';

import { Metadata } from 'next';

type CategoryPageProps = {
  params: { categoryId: Category; lang: Language };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang, categoryId } = params;
  return {
    // title: `Категорія ${categoryId} | Магазин`,
    alternates: {
      canonical:
        lang === 'uk'
          ? `${baseUrl}/uk/shop/${categoryId}`
          : `${baseUrl}/uk/shop/${categoryId}`,

      languages: {
        en: `${baseUrl}/en/shop/${categoryId}`,
        uk: `${baseUrl}/uk/shop/${categoryId}`,
        pl: `${baseUrl}/pl/shop/${categoryId}`,
      },
    },
  };
}

function CategoryPage({ params: { lang, categoryId } }: CategoryPageProps) {
  return (
    <main style={{ marginBottom: '40px' }}>
      <CategoryProductsSection categoryId={categoryId} lang={lang} />
      <ReviewsSection />
    </main>
  );
}

export default CategoryPage;
