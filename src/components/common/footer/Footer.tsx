import Link from 'next/link';

import CustomImage from 'src/components/common/customImage';
import SocialLinksList from 'src/components/common/socialLinksList';
import Container from 'src/components/common/container';
import FooterMenu from './footerMenu';

import BrandingConst from 'src/data/brandingConst';
import { Language } from 'src/types/language';
import lang from 'src/i18n/lang';

import styles from './Footer.module.css';

type Props = {
  language: Language;
};

function Footer({ language }: Props) {
  const toPolicy = `/${language}/policy`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <Container>
        <>
          <div className={styles.navbar}>
            <Link
              href={`/${language}/`}
              className={styles.link}
              prefetch={false}
            >
              <div className={styles.logo}>
                <CustomImage
                  src="/img/logo/logotype.svg"
                  alt="logo"
                  width={135}
                  height={31}
                  priority
                />
              </div>
            </Link>
            <div className={styles.menuAndAddressContainer}>
              <FooterMenu language={language} />
              <address className={styles.social}>
                <p className={styles.findUsHere}>
                  {lang('FindUsHere', language)}
                </p>
                <SocialLinksList background="dark" />
              </address>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.madeIn}>{lang('MadeIn', language)} 🇺🇦</div>
            <div className={styles.copyright}>
              &copy; 2019 &ndash; {currentYear} {BrandingConst.SiteName}. All
              Rights Reserved.
            </div>
          </div>
        </>
      </Container>
    </footer>
  );
}

export default Footer;
