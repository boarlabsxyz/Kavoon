import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import ModalWindow from 'src/components/common/modalWindow';
import ReviewImagePreview from './ReviewImagePreview';

import IReview from 'src/types/review';

import st from './ReviewsModerationTable.module.css';

const reviewLocales = [
  { locale: 'uk', label: 'Ukrainian' },
  { locale: 'ru', label: 'Russian' },
  { locale: 'en', label: 'English' },
  { locale: 'pl', label: 'Polish' },
];

function ReviewsModerationTable({
  changeShowOnSite,
  chooseLanguage,
  deactivateReview,
  allReviews,
}) {
  const [reviewID, setReviewID] = useState('');

  function onChange(id: string) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const chosenLanguage = event.target.value;
      chooseLanguage(id, chosenLanguage);
    };
  }

  function renderModal() {
    const review = allReviews.find(({ _id }) => _id === reviewID);
    if (!review || !review.images.length) return null;

    return createPortal(
      <ModalWindow onClose={() => setReviewID('')}>
        <ReviewImagePreview allPhotos={review.images} />
      </ModalWindow>,
      document.body
    );
  }

  return (
    <>
      {reviewID && renderModal()}
      <table className={st.table}>
        <caption>Reviews</caption>
        <thead>
          <tr>
            <th className={st.product}>Product</th>
            <th className={st.userName}>User name</th>
            <th className={st.rating}>Rating</th>
            <th className={st.comment}>Comment</th>
            <th className={st.photos}>Photos</th>
            <th className={st.language}>Choose language</th>
            <th className={st.show}>Show on the site</th>
            <th className={st.delete}>Delete review</th>
          </tr>
        </thead>
        <tbody>
          {allReviews.map((review: IReview) => {
            const {
              _id,
              productName,
              userName,
              rating,
              comment,
              images,
              reviewLanguage,
              showOnSite,
            } = review;

            return (
              <tr key={_id}>
                <td className={st.productName}>{productName}</td>
                <td>{userName}</td>
                <td>{rating}</td>
                <td className={st.reviewComment}>
                  {comment || <> &mdash; </>}
                </td>
                <td>
                  {!images || images.length === 0 ? (
                    <> &mdash; </>
                  ) : (
                    <button
                      type="button"
                      className={st.showReview}
                      onClick={() => setReviewID(_id)}
                    >
                      Show photos
                    </button>
                  )}
                </td>
                <td className={st.reviewLanguage}>
                  <form>
                    {reviewLocales.map(({ label, locale }) => (
                      <label key={label}>
                        <input
                          type="radio"
                          name="language"
                          value={locale}
                          checked={reviewLanguage === locale}
                          onChange={onChange(_id)}
                        />
                        {label}
                      </label>
                    ))}
                  </form>
                </td>
                <td className={st.show}>
                  <input
                    type="checkbox"
                    checked={showOnSite}
                    disabled={!reviewLanguage}
                    onChange={() => changeShowOnSite(_id, showOnSite)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className={st.deleteReview}
                    onClick={() => deactivateReview(_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ReviewsModerationTable;
