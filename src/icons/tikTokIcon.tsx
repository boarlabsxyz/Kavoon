import { FC } from 'react';

import { IconWithClassName } from 'src/types/iconProps';

const TikTokIcon: FC<IconWithClassName> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.583 10.396A10.989 10.989 0 0 0 23 12.46V7.876a6.417 6.417 0 0 1-6.417-6.417H12v14.667a3.208 3.208 0 1 1-4.583-2.9V8.46a7.792 7.792 0 1 0 9.166 7.666v-5.73Z"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TikTokIcon;
