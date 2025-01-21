import { Category } from 'src/data/constants';
import { Language } from 'src/types/language';
import CategoryProductsSection from 'src/components/categoryPage/categoryProductsSection';
import ReviewsSection from 'src/components/common/reviewsSection';

type CategoryPageProps = {
  params: { categoryId: Category; lang: Language };
};

function CategoryPage({ params: { lang, categoryId } }: CategoryPageProps) {
  return (
    <main style={{ marginBottom: '40px' }}>
      <CategoryProductsSection categoryId={categoryId} lang={lang} />
      <ReviewsSection />
    </main>
  );
}

export default CategoryPage;
