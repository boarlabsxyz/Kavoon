import { FC } from 'react';

import { Icon } from 'src/types/iconProps';

const MoreIcon: FC<Icon> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 10"
  >
    <defs>
      <path
        id="prefix__a"
        d="M0.029 0.3L15.056 0.3 15.056 9.142 0.029 9.142z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill={color}
        d="M14.83 1.155L14.288.61c-.3-.3-.789-.3-1.09 0L7.536 6.202 1.859.525c-.3-.3-.79-.3-1.088 0l-.545.546c-.301.299-.301.787 0 1.088l6.76 6.758c.3.3.786.3 1.087 0l6.758-6.673c.3-.3.3-.788 0-1.089z"
        mask="url(#prefix__b)"
      />
    </g>
  </svg>
);

export default MoreIcon;
