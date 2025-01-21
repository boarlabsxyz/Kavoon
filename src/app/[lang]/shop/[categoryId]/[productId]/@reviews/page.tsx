import ReviewsSection from 'src/components/common/reviewsSection';

type Props = {
  params: { productId: string };
};

async function Reviews({ params: { productId } }: Props) {
  return <ReviewsSection />;
}

export default Reviews;
