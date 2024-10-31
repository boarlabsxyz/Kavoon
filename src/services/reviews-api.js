import * as Sentry from '@sentry/browser';

const createReview = async (review) => {
  const {
    productName,
    categoryId,
    userName,
    rating,
    comment,
    images,
    date,
    reviewLanguage,
    showOnSite,
    isActive,
  } = review;
  const data = {
    productName,
    categoryId,
    userName,
    rating,
    comment,
    images,
    date,
    reviewLanguage,
    showOnSite,
    isActive,
  };

  try {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    Sentry.captureException(error);
    return error;
  }
};

const updateReview = async (_id, updates) => {
  const data = { _id, updates };
  try {
    const response = await fetch('/api/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    Sentry.captureException(error);
    return error;
  }
};

const reviewsApi = { createReview, updateReview };
export default reviewsApi;
