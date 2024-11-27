import Image, { ImageProps } from 'next/image';

import getImageQuality from 'src/helpers/getImageQuality';

interface CustomImageProps extends Omit<ImageProps, 'quality'> {
  alt: string;
}

const CustomImage = (props: CustomImageProps): JSX.Element => {
  const { src, alt, ...rest } = props;

  return (
    <Image
      src={src}
      alt={alt}
      quality={getImageQuality(src as string)}
      {...rest}
    />
  );
};

export default CustomImage;
