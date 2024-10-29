'use client';

import { useState } from 'react';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

import CustomImage from 'src/components/common/customImage';
import shimmerUrl from 'src/helpers/shimmerUrl';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import st from './ProductPreviewSlider.module.css';

function ProductDetailsPrevSlider({ vm, name }) {
  const [slider2, setSlider2] = useState<SwiperClass>(null);

  return (
    <div className={st.wrapper}>
      <div className={st.previewWrapper}>
        <Swiper
          className={st.preview}
          modules={[Navigation, Pagination, Thumbs]}
          thumbs={{ swiper: slider2 }}
          navigation={{ enabled: true }}
          pagination={{ enabled: true, clickable: true }}
        >
          {vm.gallery.map(({ largeImgSrc }, index: number) => (
            <SwiperSlide key={largeImgSrc}>
              <CustomImage
                className={st.previewImg}
                src={largeImgSrc}
                alt={`${name} ${index + 1}`}
                width={495}
                height={500}
                placeholder="blur"
                blurDataURL={shimmerUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        className={st.thumbs}
        onSwiper={setSlider2}
        modules={[Thumbs]}
        watchSlidesProgress
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={25}
      >
        {vm.gallery.map(({ smallImgSrc }, index: number) => (
          <SwiperSlide key={smallImgSrc}>
            <CustomImage
              src={smallImgSrc}
              alt={`${name} ${index + 1}`}
              width={129}
              height={129}
              placeholder="blur"
              blurDataURL={shimmerUrl}
              className={st.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ProductDetailsPrevSlider;
