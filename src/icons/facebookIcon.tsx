import { FC } from 'react';

import { IconWithClassName } from 'src/types/iconProps';

const FacebookIcon: FC<IconWithClassName> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      strokeWidth="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.69896 25.5479H9.63009C10.2867 25.5479 10.821 25.0138 10.821 24.3572V15.4901H13.6243C14.281 15.4901 14.8151 14.956 14.8151 14.2997L14.8166 10.5003C14.8166 10.0689 14.5817 9.66984 14.204 9.45877C14.0289 9.36101 13.8251 9.30913 13.6148 9.30913H10.821V7.80597C10.821 7.31622 10.8868 7.13886 10.942 7.07612C10.9756 7.03829 11.1323 6.91487 11.7479 6.91487L13.7665 6.91412C14.4229 6.91412 14.9569 6.37998 14.9569 5.72335V2.19563C14.9569 1.54013 14.4237 1.00599 13.7682 1.00487L10.7701 1C8.91971 1 7.3467 1.61036 6.22111 2.76536C5.10058 3.91511 4.50819 5.52015 4.50819 7.40668V9.30932H2.21469C1.55807 9.30932 1.02393 9.84346 1.02393 10.5001V14.2996C1.02393 14.956 1.55807 15.4903 2.21469 15.4903H4.50819V24.3572C4.50819 25.0138 5.04233 25.5479 5.69896 25.5479ZM9.38175 24.1088H5.9473V14.8461C5.9473 14.4076 5.59071 14.051 5.15246 14.051H2.46303V10.7484H5.15246C5.59071 10.7484 5.9473 10.3916 5.9473 9.95339V7.40668C5.9473 4.34268 7.79525 2.43911 10.769 2.43911L13.5178 2.4436V5.47501L11.7475 5.47576C11.1842 5.47576 10.376 5.54281 9.86326 6.12377C9.43887 6.60434 9.38175 7.24374 9.38175 7.80597V9.95339C9.38175 10.3918 9.73834 10.7484 10.1766 10.7484H13.3773L13.376 14.051H10.1768C9.73853 14.051 9.38175 14.4076 9.38175 14.8461V24.1088Z"
    />
  </svg>
);

export default FacebookIcon;
