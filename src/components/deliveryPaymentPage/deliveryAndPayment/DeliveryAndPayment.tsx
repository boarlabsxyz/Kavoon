import { FC } from 'react';

import CustomImage from 'src/components/common/customImage';
import { I18N } from 'src/types/i18n.type';

import styles from './DeliveryAndPayment.module.css';

type Props = {
  dictionary: I18N;
};

const DeliveryAndPayment: FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{dictionary.title.toUpperCase()} </h2>
        <h3>{dictionary.payment}</h3>
        <p>{dictionary.subtitle}</p>
        <p>{dictionary.paymentSecondParagraph}</p>
        <div className={styles.paymentOptions}>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/transfergo-logo.svg"
              alt="TransferGo logo"
              width={141}
              height={40}
            />
          </div>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/paypal-logo.svg"
              alt="PayPal logo"
              width={40}
              height={40}
            />
          </div>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/transferwise-logo.svg"
              alt="Transferwise logo"
              width={240}
              height={40}
            />
          </div>
        </div>

        <p>{dictionary.paymentThirdParagraph}</p>
        <h3>{dictionary.shippingInUkraine}</h3>
        <p>{dictionary.shippingInUkraineParagraph}</p>
        <div className={`${styles.paymentOptions} ${styles.twoElements}`}>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/nova-poshta-logo.svg"
              alt="Nova Poshta logo"
              width={103}
              height={40}
            />
          </div>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/ukrposhta-ua-logo.svg"
              alt="Ukrposhta logo"
              width={150}
              height={40}
            />
          </div>
        </div>
        <h3>{dictionary.shippingAbroad}</h3>
        <p>{dictionary.shippingAbroadFirstParagraph}</p>
        <div className={styles.paymentOptions}>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/rosan-logo.svg"
              alt="Rosan logo"
              width={153}
              height={40}
            />
          </div>
        </div>
        <p>{dictionary.shippingAbroadSecondParagraph}</p>
      </div>
    </section>
  );
};

export default DeliveryAndPayment;
