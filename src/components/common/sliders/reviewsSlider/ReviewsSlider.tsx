'use client';

import { useRef, useState } from 'react';

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
  slidesPerGroup: 1,
};

function ReviewsSlider({ reviews, language }: Props) {
  const swiperRef = useRef<any>(null);
  const [showModal, toggleModal] = useToggle();
  const [seeMoreReviewId, setSeeMoreReviewId] = useState<string | null>(null);

  const isOneReview = reviews.length === 1;

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (swiperRef.current) {
      direction === 'prev'
        ? swiperRef.current.slidePrev()
        : swiperRef.current.slideNext();
    }
  };

  const handleNavigationKeyPress =
    (direction: 'prev' | 'next') => (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNavigation(direction);
      }
    };

  const handlerModal = (e: React.MouseEvent, id: string) => {
    if ((e.target as HTMLElement).id !== 'ShowOriginalBtn') {
      toggleModal();
      setSeeMoreReviewId(id);
    }
  };

  return (
    <div className={st.container}>
      {!isOneReview && (
        <>
          <div
            className={`swiper-button-prev arrow-prev ${st.prevReviewArrow}`}
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="reviews-slider"
            onKeyDown={handleNavigationKeyPress('prev')}
            onClick={() => handleNavigation('prev')}
          />
          <div
            className={`swiper-button-next arrow-next ${st.nextReviewArrow}`}
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="reviews-slider"
            onKeyDown={handleNavigationKeyPress('next')}
            onClick={() => handleNavigation('next')}
          />
        </>
      )}
      <Swiper
        className={st.wrapper}
        centeredSlides={isOneReview}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        {...options}
      >
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

      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <ReviewModalContent
            review={
              reviews.find((review) => review._id === seeMoreReviewId) || null
            }
            language={language}
          />
        </ModalWindow>
      )}
    </div>
  );
}

export default ReviewsSlider;
