'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperRef } from 'swiper';

import CustomImage from 'src/components/common/customImage';

import { Language } from 'src/types/language';
import lang from 'src/i18n/lang';
import shimmerUrl from 'src/helpers/shimmerUrl';

import 'photoswipe/style.css';

import st from './ProductDetailsImgGallery.module.css';

const ProductDetailsImgGallery = ({ images }) => {
  const { lang: language } = useParams<{ lang: Language }>();
  const swiperRef = useRef<SwiperRef | null>(null);
  const sliderSwitchingSpeed = 1000;

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      bgOpacity: 0.8,
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    lightbox.on('change', () => {
      const { pswp } = lightbox;
      if (swiperRef.current) {
        swiperRef.current.slideTo(pswp.currIndex, sliderSwitchingSpeed, false);
      }
    });

    return () => {
      lightbox.destroy();
      lightbox = null;
      swiperRef.current = null;
    };
  }, []);

  return (
    <div className={st.galleryContainer}>
      <Swiper
        id="gallery"
        className={st.sliderWrapper}
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={500}
        loop
        navigation
        breakpoints={{
          1024: { slidesPerView: 3 },
          1260: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map(({ subText, imgSrc }) => (
          <SwiperSlide className={st.slide} key={subText}>
            <Link
              href={imgSrc}
              locale={false}
              data-pswp-width={850}
              data-pswp-height={600}
              data-cropped="true"
              target="_blank"
              prefetch={false}
            >
              <CustomImage
                src={imgSrc}
                alt={lang(subText, language)}
                width={259}
                height={185}
                className={st.photo}
                placeholder="blur"
                blurDataURL={shimmerUrl}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductDetailsImgGallery;
