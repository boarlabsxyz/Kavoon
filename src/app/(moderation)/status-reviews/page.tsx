import StatusReviews from 'src/components/statusReviewsPage';

async function StatusReviewsPage() {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

  const response = await fetch(`${apiBaseUrl}/api/reviews`);
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const data = await response.json();
  return <StatusReviews reviews={data.data} />;
}

export default StatusReviewsPage;
