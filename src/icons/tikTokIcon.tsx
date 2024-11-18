import { FC } from 'react';

import { IconWithClassName } from 'src/types/iconProps';

const TikTokIcon: FC<IconWithClassName> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 15 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5095 0.299988H7.7966V10.7898C7.7966 12.0397 6.7532 13.0664 5.45471 13.0664C4.15622 13.0664 3.1128 12.0397 3.1128 10.7898C3.1128 9.56232 4.13304 8.55794 5.38516 8.51332V5.87971C2.62587 5.92432 0.399902 8.08926 0.399902 10.7898C0.399902 13.5128 2.67225 15.7 5.47791 15.7C8.28353 15.7 10.5559 13.4904 10.5559 10.7898V5.41099C11.5761 6.12521 12.8282 6.54926 14.1499 6.57159V3.93796C12.1094 3.871 10.5095 2.26404 10.5095 0.299988Z"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TikTokIcon;
