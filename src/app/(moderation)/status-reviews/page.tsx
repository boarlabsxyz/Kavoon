import StatusReviews from 'src/components/statusReviewsPage';
import { getAllReviews } from 'src/services/mongodb';

async function StatusReviewsPage() {
  const reviews = await getAllReviews();
  return <StatusReviews reviews={reviews} />;
}

export default StatusReviewsPage;
