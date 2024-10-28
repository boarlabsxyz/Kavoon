'use client';

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

  const changeShowOnSite = async (id: string, showOnSite: boolean) => {
    const updates = { showOnSite: !showOnSite };
    await reviewsApi.updateReview(id, updates);
    router.refresh();
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
      {reviews && reviews.length === 0 ? (
        <h2 className={st.message}>There are no reviews yet</h2>
      ) : (
        <ReviewsModerationTable
          changeShowOnSite={changeShowOnSite}
          chooseLanguage={chooseLanguage}
          deactivateReview={deactivateReview}
          allReviews={reviews}
        />
      )}
    </main>
  );
}

export default StatusReviews;
