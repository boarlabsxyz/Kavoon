'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import CustomImage from 'src/components/common/customImage';

import shimmerUrl from 'src/helpers/shimmerUrl';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import st from './ReviewsPhotoSlider.module.css';

type Props = {
  photos: string[];
};

function ReviewsPhotoSlider({ photos }: Props) {
  const hasManyPhotos = photos.length > 1;

  const options: SwiperOptions = {
    modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 20,
    pagination: {
      type: hasManyPhotos ? 'fraction' : 'custom',
    },
    navigation: {
      nextEl: hasManyPhotos && `.${st.container} .arrow-next`,
      prevEl: hasManyPhotos && `.${st.container} .arrow-prev`,
    },
    slidesPerGroup: 1,
  };

  return (
    <div className={st.container}>
      <Swiper className={st.wrapper} {...options}>
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <div className={st.photo}>
              <CustomImage
                src={photo}
                width={220}
                height={220}
                alt="user-review-photo"
                placeholder="blur"
                blurDataURL={shimmerUrl}
                key={photo}
                className={st.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {hasManyPhotos && (
        <>
          <div
            className={`swiper-button-prev arrow-prev ${st.prevReviewPhotoArrow}`}
          />
          <div
            className={`swiper-button-next arrow-next ${st.nextReviewPhotoArrow}`}
          />
        </>
      )}
    </div>
  );
}

export default ReviewsPhotoSlider;
