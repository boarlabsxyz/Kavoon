import { FC } from 'react';

import CustomImage from 'src/components/common/customImage';

import shimmerUrl from 'src/helpers/shimmerUrl';
import { I18N } from 'src/types/i18n.type';

import styles from './AboutUs.module.css';

type Props = {
  dictionary: I18N;
};

const dictionary: FC<Props> = ({ dictionary }) => {
  const aboutUsItems = [
    {
      src: '/img/about-us/history_560x362@3x.jpg',
      alt: dictionary.ourHistory,
      width: '560px',
      title: dictionary.ourHistory,
      text: dictionary.ourHistoryText,
    },
    {
      src: '/img/about-us/brand_461x562@3x.jpg',
      alt: dictionary.brandCreation,
      width: '461px',
      title: dictionary.brandCreation,
      text: dictionary.brandCreationText,
    },
    {
      src: '/img/about-us/design_556x607@3x.jpg',
      alt: dictionary.uniqueDesign,
      width: '556px',
      title: dictionary.uniqueDesign,
      text: dictionary.uniqueDesignText,
    },
  ];

  const title = () => {
    const titleParts = dictionary.title.split(' ');
    return (
      <h2>
        {titleParts[0].toUpperCase()} <span>{titleParts[1].toUpperCase()}</span>
      </h2>
    );
  };

  return (
    <section className={`${styles.section}`}>
      {title()}
      <p>{dictionary.subtitle}</p>

      <ul className={styles.list}>
        {aboutUsItems.map((item, index) => (
          <li key={index}>
            <CustomImage
              src={item.src}
              alt={item.alt}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: item.width, height: 'auto' }}
              placeholder="blur"
              blurDataURL={shimmerUrl}
            />
            <div className={styles.paragraph}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default dictionary;
