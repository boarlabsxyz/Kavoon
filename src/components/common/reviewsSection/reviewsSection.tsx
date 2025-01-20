import ProductReviews from 'src/components/common/productReviews';

import { getReviews } from 'src/services/mongodb';

import { Category } from 'src/data/constants';

type Props = {
  categoryId?: Category;
  productId?: string;
};

async function ReviewsSection({ productId, categoryId }: Props) {
  const reviews = await getReviews(productId, categoryId);

  return <ProductReviews reviews={reviews} />;
}

export default ReviewsSection;
