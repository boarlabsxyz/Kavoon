import CustomImage from 'src/components/common/customImage';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import shimmerUrl from 'src/helpers/shimmerUrl';

import st from './ReviewImagePreview.module.css';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  allPhotos: string[];
}

function ReviewImagePreview({ allPhotos }: Props) {
  return (
    <Swiper className={st.wrapper} modules={[Navigation]} navigation>
      {allPhotos.map((item) => (
        <SwiperSlide key={item}>
          <CustomImage
            src={item}
            alt="user-review-large-photo"
            width={600}
            height={400}
            placeholder="blur"
            blurDataURL={shimmerUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ReviewImagePreview;
