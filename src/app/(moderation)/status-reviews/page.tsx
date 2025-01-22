import StatusReviews from 'src/components/statusReviewsPage';

async function StatusReviewsPage() {
  // const baseUrl =
  // process.env.NEXT_PUBLIC_API_BASE_URL || `https://${process.env.VERCEL_URL}`;
  const baseUrl = `https://${process.env.VERCEL_URL}`;
  const response = await fetch(`${baseUrl}/api/reviews`);
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const data = await response.json();
  return <StatusReviews reviews={data.data} />;
}

export default StatusReviewsPage;
