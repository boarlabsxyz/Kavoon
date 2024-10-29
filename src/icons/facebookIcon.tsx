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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.69896 25.5479H9.63009C10.2867 25.5479 10.821 25.0138 10.821 24.3572V15.4901H13.6243C14.281 15.4901 14.8151 14.956 14.8151 14.2997L14.8166 10.5003C14.8166 10.0689 14.5817 9.66984 14.204 9.45877C14.0289 9.36101 13.8251 9.30913 13.6148 9.30913H10.821V7.80597C10.821 7.31622 10.8868 7.13886 10.942 7.07612C10.9756 7.03829 11.1323 6.91487 11.7479 6.91487L13.7665 6.91412C14.4229 6.91412 14.9569 6.37998 14.9569 5.72335V2.19563C14.9569 1.54013 14.4237 1.00599 13.7682 1.00487L10.7701 1C8.91971 1 7.3467 1.61036 6.22111 2.76536C5.10058 3.91511 4.50819 5.52015 4.50819 7.40668V9.30932H2.21469C1.55807 9.30932 1.02393 9.84346 1.02393 10.5001V14.2996C1.02393 14.956 1.55807 15.4903 2.21469 15.4903H4.50819V24.3572C4.50819 25.0138 5.04233 25.5479 5.69896 25.5479ZM9.38175 24.1088H5.9473V14.8461C5.9473 14.4076 5.59071 14.051 5.15246 14.051H2.46303V10.7484H5.15246C5.59071 10.7484 5.9473 10.3916 5.9473 9.95339V7.40668C5.9473 4.34268 7.79525 2.43911 10.769 2.43911L13.5178 2.4436V5.47501L11.7475 5.47576C11.1842 5.47576 10.376 5.54281 9.86326 6.12377C9.43887 6.60434 9.38175 7.24374 9.38175 7.80597V9.95339C9.38175 10.3918 9.73834 10.7484 10.1766 10.7484H13.3773L13.376 14.051H10.1768C9.73853 14.051 9.38175 14.4076 9.38175 14.8461V24.1088Z"
    />
    <path d="M10.821 15.4901V15.3901H10.721V15.4901H10.821ZM14.8151 14.2997L14.7151 14.2997V14.2997H14.8151ZM14.8166 10.5003L14.9166 10.5003V10.5003H14.8166ZM14.204 9.45877L14.2528 9.37147L14.2527 9.37146L14.204 9.45877ZM10.821 9.30913H10.721V9.40913H10.821V9.30913ZM10.942 7.07612L10.8672 7.0098L10.867 7.01003L10.942 7.07612ZM11.7479 6.91487V7.01486H11.748L11.7479 6.91487ZM13.7665 6.91412V6.81412H13.7665L13.7665 6.91412ZM13.7682 1.00487L13.7683 0.90487L13.7683 0.90487L13.7682 1.00487ZM10.7701 1L10.7703 0.9H10.7701V1ZM6.22111 2.76536L6.29273 2.83515L6.29273 2.83515L6.22111 2.76536ZM4.50819 9.30932V9.40932H4.60819V9.30932H4.50819ZM4.50819 15.4903H4.60819V15.3903H4.50819V15.4903ZM5.9473 24.1088H5.8473V24.2088H5.9473V24.1088ZM9.38175 24.1088V24.2088H9.48175V24.1088H9.38175ZM2.46303 14.051H2.36303V14.151H2.46303V14.051ZM2.46303 10.7484V10.6484H2.36303V10.7484H2.46303ZM10.769 2.43911L10.7691 2.33911H10.769V2.43911ZM13.5178 2.4436H13.6178V2.34376L13.5179 2.3436L13.5178 2.4436ZM13.5178 5.47501L13.5178 5.57501L13.6178 5.57497V5.47501H13.5178ZM11.7475 5.47576V5.57576H11.7476L11.7475 5.47576ZM9.86326 6.12377L9.93822 6.18996L9.93823 6.18994L9.86326 6.12377ZM13.3773 10.7484L13.4773 10.7485L13.4773 10.6484H13.3773V10.7484ZM13.376 14.051V14.151H13.476L13.476 14.0511L13.376 14.051ZM9.63009 25.4479H5.69896V25.6479H9.63009V25.4479ZM10.721 24.3572C10.721 24.9586 10.2315 25.4479 9.63009 25.4479V25.6479C10.3419 25.6479 10.921 25.0691 10.921 24.3572H10.721ZM10.721 15.4901V24.3572H10.921V15.4901H10.721ZM13.6243 15.3901H10.821V15.5901H13.6243V15.3901ZM14.7151 14.2997C14.7151 14.9007 14.2258 15.3901 13.6243 15.3901V15.5901C14.3362 15.5901 14.9151 15.0112 14.9151 14.2997H14.7151ZM14.7166 10.5002L14.7151 14.2997L14.9151 14.2998L14.9166 10.5003L14.7166 10.5002ZM14.1552 9.54607C14.5015 9.73955 14.7166 10.1054 14.7166 10.5003H14.9166C14.9166 10.0325 14.662 9.60013 14.2528 9.37147L14.1552 9.54607ZM13.6148 9.40913C13.8088 9.40913 13.9957 9.45702 14.1552 9.54609L14.2527 9.37146C14.062 9.26499 13.8414 9.20913 13.6148 9.20913V9.40913ZM10.821 9.40913H13.6148V9.20913H10.821V9.40913ZM10.721 7.80597V9.30913H10.921V7.80597H10.721ZM10.867 7.01003C10.8227 7.06029 10.7877 7.14002 10.7629 7.26076C10.7377 7.3832 10.721 7.55733 10.721 7.80597H10.921C10.921 7.56486 10.9373 7.40543 10.9588 7.30107C10.9806 7.19501 11.0061 7.15469 11.0171 7.14221L10.867 7.01003ZM11.7479 6.81487C11.1264 6.81487 10.9308 6.93801 10.8672 7.0098L11.0169 7.14244C11.0203 7.13857 11.1382 7.01486 11.7479 7.01486V6.81487ZM13.7665 6.81412L11.7479 6.81487L11.748 7.01486L13.7665 7.01412L13.7665 6.81412ZM14.8569 5.72335C14.8569 6.32478 14.3677 6.81412 13.7665 6.81412V7.01412C14.4782 7.01412 15.0569 6.43517 15.0569 5.72335H14.8569ZM14.8569 2.19563V5.72335H15.0569V2.19563H14.8569ZM13.768 1.10487C14.3683 1.1059 14.8569 1.59529 14.8569 2.19563H15.0569C15.0569 1.48497 14.479 0.906088 13.7683 0.90487L13.768 1.10487ZM10.7699 1.1L13.768 1.10487L13.7683 0.90487L10.7703 0.9L10.7699 1.1ZM6.29273 2.83515C7.39667 1.70237 8.94235 1.1 10.7701 1.1V0.9C8.89708 0.9 7.29673 1.51836 6.14949 2.69556L6.29273 2.83515ZM4.60819 7.40668C4.60819 5.54133 5.19355 3.96299 6.29273 2.83515L6.1495 2.69556C5.00761 3.86722 4.40819 5.49897 4.40819 7.40668H4.60819ZM4.60819 9.30932V7.40668H4.40819V9.30932H4.60819ZM2.21469 9.40932H4.50819V9.20932H2.21469V9.40932ZM1.12393 10.5001C1.12393 9.89868 1.61329 9.40932 2.21469 9.40932V9.20932C1.50284 9.20932 0.923926 9.78823 0.923926 10.5001H1.12393ZM1.12393 14.2996V10.5001H0.923926V14.2996H1.12393ZM2.21469 15.3903C1.6133 15.3903 1.12393 14.9008 1.12393 14.2996H0.923926C0.923926 15.0112 1.50283 15.5903 2.21469 15.5903V15.3903ZM4.50819 15.3903H2.21469V15.5903H4.50819V15.3903ZM4.60819 24.3572V15.4903H4.40819V24.3572H4.60819ZM5.69896 25.4479C5.09756 25.4479 4.60819 24.9586 4.60819 24.3572H4.40819C4.40819 25.069 4.98711 25.6479 5.69896 25.6479V25.4479ZM5.9473 24.2088H9.38175V24.0088H5.9473V24.2088ZM5.8473 14.8461V24.1088H6.0473V14.8461H5.8473ZM5.15246 14.151C5.53546 14.151 5.8473 14.4628 5.8473 14.8461H6.0473C6.0473 14.3524 5.64595 13.951 5.15246 13.951V14.151ZM2.46303 14.151H5.15246V13.951H2.46303V14.151ZM2.36303 10.7484V14.051H2.56303V10.7484H2.36303ZM5.15246 10.6484H2.46303V10.8484H5.15246V10.6484ZM5.8473 9.95339C5.8473 10.3364 5.53545 10.6484 5.15246 10.6484V10.8484C5.64597 10.8484 6.0473 10.4468 6.0473 9.95339H5.8473ZM5.8473 7.40668V9.95339H6.0473V7.40668H5.8473ZM10.769 2.33911C9.26029 2.33911 8.02712 2.8225 7.17124 3.70424C6.31568 4.58565 5.8473 5.85458 5.8473 7.40668H6.0473C6.0473 5.89477 6.50289 4.67993 7.31475 3.84354C8.12627 3.0075 9.30393 2.53911 10.769 2.53911V2.33911ZM13.5179 2.3436L10.7691 2.33911L10.7688 2.53911L13.5176 2.5436L13.5179 2.3436ZM13.6178 5.47501V2.4436H13.4178V5.47501H13.6178ZM11.7476 5.57576L13.5178 5.57501L13.5177 5.37501L11.7475 5.37576L11.7476 5.57576ZM9.93823 6.18994C10.4191 5.64515 11.1846 5.57576 11.7475 5.57576V5.37576C11.1838 5.37576 10.333 5.44047 9.78829 6.05759L9.93823 6.18994ZM9.48175 7.80597C9.48175 7.24575 9.54032 6.64054 9.93822 6.18996L9.7883 6.05758C9.33742 6.56815 9.28175 7.24173 9.28175 7.80597H9.48175ZM9.48175 9.95339V7.80597H9.28175V9.95339H9.48175ZM10.1766 10.6484C9.79358 10.6484 9.48175 10.3366 9.48175 9.95339H9.28175C9.28175 10.447 9.6831 10.8484 10.1766 10.8484V10.6484ZM13.3773 10.6484H10.1766V10.8484H13.3773V10.6484ZM13.476 14.0511L13.4773 10.7485L13.2773 10.7484L13.276 14.051L13.476 14.0511ZM10.1768 14.151H13.376V13.951H10.1768V14.151ZM9.48175 14.8461C9.48175 14.4629 9.79374 14.151 10.1768 14.151V13.951C9.68332 13.951 9.28175 14.3524 9.28175 14.8461H9.48175ZM9.48175 24.1088V14.8461H9.28175V24.1088H9.48175Z" />
  </svg>
);

export default FacebookIcon;
