'use client';

import { useEffect, useState } from 'react';
import StatusReviews from 'src/components/statusReviewsPage';
import IReview from 'src/types/review';

function StatusReviewsPage() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data || !Array.isArray(data.data)) {
          throw new Error('Invalid response format');
        }
        setReviews(data.data);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error('Failed to fetch reviews')
        );
      }
    };

    fetchReviews();
  }, []);

  if (error) {
    return <div>Error loading reviews: {error.message}</div>;
  }

  return <StatusReviews reviews={reviews} />;
}

export default StatusReviewsPage;
