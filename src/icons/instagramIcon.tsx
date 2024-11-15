import { FC } from 'react';

import { IconWithClassName } from 'src/types/iconProps';

const InstagramIcon: FC<IconWithClassName> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0018 5.5897C12.7653 5.5897 12.9723 5.59756 13.6694 5.62901C14.314 5.65783 14.6625 5.76527 14.8957 5.85699C15.2049 5.97753 15.4251 6.11903 15.6557 6.34963C15.8862 6.58023 16.0304 6.80034 16.1483 7.10955C16.2374 7.34277 16.3474 7.69129 16.3763 8.33592C16.4077 9.03295 16.4156 9.23997 16.4156 11.0035C16.4156 12.7671 16.4077 12.9741 16.3763 13.6711C16.3474 14.3157 16.24 14.6643 16.1483 14.8975C16.0278 15.2067 15.8862 15.4268 15.6557 15.6574C15.4251 15.888 15.2049 16.0321 14.8957 16.1501C14.6625 16.2391 14.314 16.3492 13.6694 16.378C12.9723 16.4095 12.7653 16.4173 11.0018 16.4173C9.2382 16.4173 9.03119 16.4095 8.33415 16.378C7.68953 16.3492 7.34101 16.2418 7.10779 16.1501C6.79858 16.0295 6.57846 15.888 6.34786 15.6574C6.11726 15.4268 5.97314 15.2067 5.85522 14.8975C5.76613 14.6643 5.65607 14.3157 5.62724 13.6711C5.5958 12.9741 5.58794 12.7671 5.58794 11.0035C5.58794 9.23997 5.5958 9.03295 5.62724 8.33592C5.65607 7.69129 5.76351 7.34277 5.85522 7.10955C5.97576 6.80034 6.11726 6.58023 6.34786 6.34963C6.57846 6.11903 6.79858 5.97491 7.10779 5.85699C7.34101 5.76789 7.68953 5.65783 8.33415 5.62901C9.03119 5.59494 9.24082 5.5897 11.0018 5.5897ZM11.0018 4.40002C9.20938 4.40002 8.98402 4.40789 8.27912 4.43933C7.57685 4.47078 7.09731 4.58345 6.67804 4.74592C6.24305 4.91363 5.87618 5.14161 5.50932 5.50847C5.14246 5.87533 4.9171 6.24481 4.74678 6.67718C4.58431 7.09645 4.47163 7.57599 4.44019 8.28089C4.40874 8.98316 4.40088 9.20852 4.40088 11.0009C4.40088 12.7933 4.40874 13.0186 4.44019 13.7235C4.47163 14.4258 4.58431 14.9053 4.74678 15.3272C4.91448 15.7622 5.14246 16.1291 5.50932 16.4959C5.87618 16.8628 6.24567 17.0882 6.67804 17.2585C7.09731 17.421 7.57685 17.5336 8.28174 17.5651C8.98664 17.5965 9.20938 17.6044 11.0044 17.6044C12.7994 17.6044 13.0221 17.5965 13.727 17.5651C14.4293 17.5336 14.9088 17.421 15.3307 17.2585C15.7657 17.0908 16.1326 16.8628 16.4994 16.4959C16.8663 16.1291 17.0916 15.7596 17.262 15.3272C17.4244 14.908 17.5371 14.4284 17.5686 13.7235C17.6 13.0186 17.6079 12.7959 17.6079 11.0009C17.6079 9.2059 17.6 8.98316 17.5686 8.27827C17.5371 7.57599 17.4244 7.09645 17.262 6.67456C17.0943 6.23957 16.8663 5.87271 16.4994 5.50585C16.1326 5.13899 15.7631 4.91363 15.3307 4.7433C14.9114 4.58083 14.4319 4.46816 13.727 4.43671C13.0195 4.40789 12.7941 4.40002 11.0018 4.40002Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="M11.0018 5.5897C12.7653 5.5897 12.9723 5.59756 13.6694 5.62901C14.314 5.65783 14.6625 5.76527 14.8957 5.85699C15.2049 5.97753 15.4251 6.11903 15.6557 6.34963C15.8862 6.58023 16.0304 6.80034 16.1483 7.10955C16.2374 7.34277 16.3474 7.69129 16.3763 8.33592C16.4077 9.03295 16.4156 9.23997 16.4156 11.0035C16.4156 12.7671 16.4077 12.9741 16.3763 13.6711C16.3474 14.3157 16.24 14.6643 16.1483 14.8975C16.0278 15.2067 15.8862 15.4268 15.6557 15.6574C15.4251 15.888 15.2049 16.0321 14.8957 16.1501C14.6625 16.2391 14.314 16.3492 13.6694 16.378C12.9723 16.4095 12.7653 16.4173 11.0018 16.4173C9.2382 16.4173 9.03119 16.4095 8.33415 16.378C7.68953 16.3492 7.34101 16.2418 7.10779 16.1501C6.79858 16.0295 6.57846 15.888 6.34786 15.6574C6.11726 15.4268 5.97314 15.2067 5.85522 14.8975C5.76613 14.6643 5.65607 14.3157 5.62724 13.6711C5.5958 12.9741 5.58794 12.7671 5.58794 11.0035C5.58794 9.23997 5.5958 9.03295 5.62724 8.33592C5.65607 7.69129 5.76351 7.34277 5.85522 7.10955C5.97576 6.80034 6.11726 6.58023 6.34786 6.34963C6.57846 6.11903 6.79858 5.97491 7.10779 5.85699C7.34101 5.76789 7.68953 5.65783 8.33415 5.62901C9.03119 5.59494 9.24082 5.5897 11.0018 5.5897Z"
      fill="white"
    />
    <path
      d="M11.0017 7.61267C9.13069 7.61267 7.61084 9.1299 7.61084 11.0035C7.61084 12.8771 9.12807 14.3944 11.0017 14.3944C12.8753 14.3944 14.3925 12.8771 14.3925 11.0035C14.3925 9.1299 12.8753 7.61267 11.0017 7.61267ZM11.0017 13.2021C9.7858 13.2021 8.80052 12.2168 8.80052 11.0009C8.80052 9.78501 9.7858 8.79973 11.0017 8.79973C12.2176 8.79973 13.2028 9.78501 13.2028 11.0009C13.2028 12.2168 12.2176 13.2021 11.0017 13.2021Z"
      fill="#040F2A"
    />
    <path
      d="M14.5262 8.26774C14.9633 8.26774 15.3176 7.91343 15.3176 7.47637C15.3176 7.03931 14.9633 6.685 14.5262 6.685C14.0892 6.685 13.7349 7.03931 13.7349 7.47637C13.7349 7.91343 14.0892 8.26774 14.5262 8.26774Z"
      fill="#040F2A"
    />
  </svg>
);

export default InstagramIcon;
