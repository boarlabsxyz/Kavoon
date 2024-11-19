import { FC } from 'react';

import { IconWithClassName } from 'src/types/iconProps';

const FacebookIcon: FC<IconWithClassName> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 10 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M9.28184 10.1797L9.76953 7H6.71875V4.9375C6.71875 4.06738 7.14414 3.21875 8.51055 3.21875H9.89844V0.511719C9.89844 0.511719 8.63945 0.296875 7.43633 0.296875C4.92266 0.296875 3.28125 1.82012 3.28125 4.57656V7H0.488281V10.1797H3.28125V17.8668C3.84199 17.9549 4.41563 18 5 18C5.58437 18 6.15801 17.9549 6.71875 17.8668V10.1797H9.28184Z"
    />
  </svg>
);

export default FacebookIcon;
