import CustomImage from 'src/components/common/customImage';
import shimmerUrl from 'src/helpers/shimmerUrl';

import st from './PhotosBlock.module.css';

type Props = {
  photos: string[];
};

function PhotosBlock({ photos }: Props) {
  return (
    <div className={st.wrapper}>
      {photos.slice(0, 3).map((photo) => (
        <CustomImage
          src={photo}
          alt="user-review-photo"
          height={80}
          width={80}
          placeholder="blur"
          blurDataURL={shimmerUrl}
          key={photo}
          className={st.photo}
        />
      ))}
    </div>
  );
}

export default PhotosBlock;
