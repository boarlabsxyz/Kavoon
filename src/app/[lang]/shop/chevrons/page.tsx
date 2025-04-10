import { Language } from 'src/types/language';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';
import ReviewsSection from 'src/components/common/reviewsSection';
import { CHEVRONS } from 'src/data/constants';

import { Metadata } from 'next';

type CategoryPageProps = {
  params: { lang: Language };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const baseUrl = 'https://kavoon.com.ua';
  const { lang } = params;

  const categoryPath = '/shop/chevrons';

  return {
    alternates: {
      canonical: `${baseUrl}/${lang}${categoryPath}`,
      languages: {
        en: `${baseUrl}/en${categoryPath}`,
        uk: `${baseUrl}/uk${categoryPath}`,
        pl: `${baseUrl}/pl${categoryPath}`,
      },
    },
  };
}

function ChevronsPage({ params: { lang } }: Readonly<CategoryPageProps>) {
  return (
    <main style={{ marginBottom: '40px' }}>
      <CategoryProductsSection categoryId={CHEVRONS} lang={lang} />
      <ReviewsSection />
    </main>
  );
}

export default ChevronsPage;
