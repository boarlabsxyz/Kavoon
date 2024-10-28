import { FC } from 'react';

import { Icon } from 'src/types/iconProps';

const PlusIcon: FC<Icon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4166 7.41664H8.58333V1.58334C8.58333 1.26117 8.32216 1 7.99998 1C7.67781 1 7.41664 1.26117 7.41664 1.58334V7.41667H1.58334C1.26117 7.41664 1 7.67781 1 7.99998C1 8.32216 1.26117 8.58333 1.58334 8.58333H7.41667V14.4167C7.41667 14.7388 7.67784 15 8.00002 15C8.32219 15 8.58336 14.7388 8.58336 14.4167V8.58333H14.4167C14.7389 8.58333 15 8.32216 15 7.99998C15 7.67781 14.7388 7.41664 14.4166 7.41664Z"
      strokeWidth="0.7"
    />
  </svg>
);

export default PlusIcon;
