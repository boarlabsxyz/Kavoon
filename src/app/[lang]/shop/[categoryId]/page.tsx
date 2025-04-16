import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';
import ReviewsSection from 'src/components/common/reviewsSection';

import { Metadata } from 'next';
import brandingConst from 'src/data/brandingConst';

type CategoryPageProps = {
  params: { categoryId: Category; lang: Language };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { siteUrl } = brandingConst;
  const { lang, categoryId } = params;

  const categoryPath = categoryId ? `/shop/${categoryId}` : 'shop';

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}${categoryPath}`,

      languages: {
        en: `${siteUrl}/en${categoryPath}`,
        uk: `${siteUrl}/uk${categoryPath}`,
        pl: `${siteUrl}/pl${categoryPath}`,
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
