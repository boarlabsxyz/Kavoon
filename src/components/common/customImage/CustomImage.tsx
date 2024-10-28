import Image, { ImageProps } from 'next/image';

import getImageQuality from 'src/helpers/getImageQuality';

interface CustomImageProps extends Omit<ImageProps, 'quality'> {}

const CustomImage = (props: CustomImageProps): JSX.Element => {
  const { src, ...rest } = props;

  return <Image src={src} quality={getImageQuality(src as string)} {...rest} />;
};

export default CustomImage;
