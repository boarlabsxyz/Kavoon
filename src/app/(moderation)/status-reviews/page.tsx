import StatusReviews from 'src/components/statusReviewsPage';
import { getAllActiveReviews } from 'src/services/mongodb';

async function StatusReviewsPage() {
  const reviews = await getAllActiveReviews();
  return <StatusReviews reviews={reviews} />;
}

export default StatusReviewsPage;
