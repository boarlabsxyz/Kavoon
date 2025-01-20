'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

import Container from 'src/components/common/container';
import ModalWindow from 'src/components/common/modalWindow';
import useToggle from 'src/hooks/useToggle';
import ReviewsSlider from 'src/components/common/sliders/reviewsSlider';
import AddReviewBtn from 'src/components/common/reviews/addReviewBtn';
import CreateReviewForm from 'src/components/common/reviews/createReviewForm';

import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';

import IReview from 'src/types/review';

import st from './ProductReviews.module.css';
import { Category } from 'src/data/constants';
import Notification from 'src/components/common/notification';
import style from 'src/components/common/notification/Notification.module.css';

type Props = {
  reviews: IReview[];
};

type UseParams = {
  lang: Language;
  productId: string;
  categoryId: Category;
};

function ProductReviewsSection({ reviews }: Props) {
  const { lang, productId, categoryId } = useParams<UseParams>();

  const [showModal, toggleModal] = useToggle(false);
  const [message, setMessage] = useState('');
  const [isShowNotification, setIsShowNotification] = useState(false);

  const handleSaveReview = (text: string) => {
    setMessage(text);
    setIsShowNotification(true);
    setTimeout(() => {
      setMessage('');
    }, 1500);
  };

  const messageArray = [translate('ThankYouForFeedback', lang), '🎉'];
  const delay = 6000;

  setTimeout(() => {
    setIsShowNotification(false);
  }, delay);

  return (
    <section className={st.section}>
      <Container>
        <h2 className={st.title}>
          {translate('Reviews', lang)}{' '}
          {reviews.length > 0 && (
            <span className={st.amount}>{`(${reviews.length})`}</span>
          )}
        </h2>
        {reviews.length === 0 ? (
          <p className={st.leaveFeedback}>{translate('LeaveFeedback', lang)}</p>
        ) : (
          <ReviewsSlider reviews={reviews} language={lang} />
        )}
        <AddReviewBtn
          onClick={() => {
            toggleModal();
          }}
        >
          {translate('WriteReview', lang)}
        </AddReviewBtn>
        {showModal && (
          <ModalWindow onClose={toggleModal}>
            <CreateReviewForm
              language={lang}
              productId={productId}
              categoryId={categoryId}
              onClose={toggleModal}
              onSaveReview={handleSaveReview}
            />
          </ModalWindow>
        )}
        {isShowNotification && (
          <Notification
            className={style.colReverse}
            messageArray={messageArray}
            delay={delay}
          />
        )}
        <div></div>
      </Container>
    </section>
  );
}
export default ProductReviewsSection;
