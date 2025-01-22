'use client';

import { useEffect, useState } from 'react';
import StatusReviews from 'src/components/statusReviewsPage';

function StatusReviewsPage() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews?');
        const data = await response.json();
        setReviews(data.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return <StatusReviews reviews={reviews} />;
}

export default StatusReviewsPage;
