'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ReviewsModerationTable from './ReviewsModerationTable';

import reviewsApi from 'src/services/reviews-api';
import IReview from 'src/types/review';

import st from './StatusReviews.module.css';

type Props = {
  reviews: IReview[];
};

type ReviewLanguage = '' | 'uk' | 'en' | 'ru' | 'pl';

function StatusReviews({ reviews }: Props) {
  const router = useRouter();
  const [allReviews, setAllReviews] = useState<IReview[]>([]);

  useEffect(() => {
    if (reviews?.length) {
      setAllReviews(reviews);
    }
  }, [reviews]);

  const changeShowOnSite = async (id: string, currentShowOnSite: boolean) => {
    const newShowOnSite = !currentShowOnSite; // Toggle the value
    const updates = { showOnSite: newShowOnSite };

    try {
      await reviewsApi.updateReview(id, updates);
      setAllReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === id ? { ...review, showOnSite: newShowOnSite } : review
        )
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to update showOnSite:', error);
    }
  };

  const chooseLanguage = async (id: string, reviewLanguage: ReviewLanguage) => {
    const updates = { reviewLanguage };
    await reviewsApi.updateReview(id, updates);
    router.refresh();
  };

  const deactivateReview = async (id: string) => {
    const updates = { isActive: false, showOnSite: false };
    await reviewsApi.updateReview(id, updates);
    router.refresh();
  };

  return (
    <main className={st.page}>
      {allReviews.length === 0 ? (
        <h2 className={st.message}>There are no reviews yet</h2>
      ) : (
        <ReviewsModerationTable
          changeShowOnSite={changeShowOnSite}
          chooseLanguage={chooseLanguage}
          deactivateReview={deactivateReview}
          allReviews={allReviews}
        />
      )}
    </main>
  );
}

export default StatusReviews;
