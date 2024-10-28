'use client';

import { useState } from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

import ModalWindow from 'src/components/common/modalWindow';
import ReviewCard from 'src/components/common/reviews/reviewCard';
import ReviewModalContent from 'src/components/common/reviews/reviewModalContent';

import useToggle from 'src/hooks/useToggle';
import IReview from 'src/types/review';
import { Language } from 'src/types/language';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import st from './ReviewsSlider.module.css';

type Props = {
  reviews: IReview[];
  language: Language;
};

const options: SwiperOptions = {
  modules: [Navigation, Pagination],
  speed: 500,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
  },
  navigation: {
    nextEl: `.${st.container} .arrow-next`,
    prevEl: `.${st.container} .arrow-prev`,
  },
  slidesPerGroup: 1,
};

function ReviewsSlider({ reviews, language }: Props) {
  const [showModal, toggleModal] = useToggle();
  const [seeMoreReviewId, setSeeMoreReviewId] = useState(null);

  const isOneReview = reviews.length === 1;

  const handlerModal = (e, id) => {
    if (e.target.id !== 'ShowOriginalBtn') {
      toggleModal();
      setSeeMoreReviewId(id);
    }
  };

  return (
    <div className={st.container}>
      <Swiper className={st.wrapper} centeredSlides={isOneReview} {...options}>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <ReviewCard
              review={review}
              language={language}
              handlerModal={handlerModal}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isOneReview && (
        <>
          <div
            className={`swiper-button-prev arrow-prev ${st.prevReviewArrow}`}
          />
          <div
            className={`swiper-button-next arrow-next ${st.nextReviewArrow}`}
          />
        </>
      )}
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <ReviewModalContent
            review={reviews.find((review) => review._id === seeMoreReviewId)}
            language={language}
          />
        </ModalWindow>
      )}
    </div>
  );
}

export default ReviewsSlider;
