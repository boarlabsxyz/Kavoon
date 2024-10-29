import ProductReviewsSection from 'src/components/productPage/reviewsSection/ProductReviewsSection';

import getAllReviews from 'src/services/mongodb';

import { Language } from 'src/types/language';
import { Category } from 'src/data/constants';

type Props = {
  params: { categoryId: Category; productId: string; lang: Language };
};

async function Reviews({ params: { productId } }: Props) {
  const filter = { productName: productId, showOnSite: true };
  const reviews = await getAllReviews(filter);

  return <ProductReviewsSection reviews={reviews} />;
}

export default Reviews;
