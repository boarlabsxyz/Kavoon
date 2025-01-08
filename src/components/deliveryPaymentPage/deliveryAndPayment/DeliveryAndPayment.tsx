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
        <div className={styles.paymentMethods}>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/paypal-logo.svg"
              alt="PayPal logo"
              width={151}
              height={40}
            />
          </div>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/payoneer-logo.svg"
              alt="Payoneer logo"
              width={206}
              height={40}
            />
          </div>
        </div>

        <p>{dictionary.paymentThirdParagraph}</p>
        <h3>{dictionary.shippingInUkraine}</h3>
        <p>{dictionary.shippingInUkraineParagraph}</p>
        <div className={`${styles.paymentMethods}`}>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/nova-poshta-ua-logo.svg"
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
        <div className={styles.paymentMethods}>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/nova-poshta-en-logo.svg"
              alt="Nova Poshta International logo"
              width={115}
              height={40}
            />
          </div>
          <div className={styles.paymentOption}>
            <CustomImage
              src="/img/blog/delivery-and-payment/ukrposhta-en-logo.svg"
              alt="Ukrposhta International logo"
              width={157}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAndPayment;
