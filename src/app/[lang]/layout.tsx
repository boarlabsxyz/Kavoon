import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from 'src/components/common/footer';
import Header from 'src/components/common/header';
import HeaderContent from 'src/components/common/header/headerContent';
import Banner from 'src/components/common/header/banner';
import Chat from 'src/components/common/chat/chat';
import CartButton from 'src/components/common/cartButton';

import { i18n } from 'src/i18n/config';
import { Language } from 'src/types/language';
import LocalStorageProvider from 'src/services/localStorageProvider';

import 'modern-normalize/modern-normalize.css';
import 'src/app/global.css';
import brandingConst from 'src/data/brandingConst';

type Props = {
  children: React.ReactNode;
  params: { lang: Language };
};

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export function generateMetadata({ params }: Props): Metadata {
  const { siteUrl } = brandingConst;
  const { lang } = params;

  return {
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        en: `${siteUrl}/en`,
        uk: `${siteUrl}/uk`,
        pl: `${siteUrl}/pl`,
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: Props) {
  const { lang } = params;

  return (
    <html lang={lang}>
      <body className={montserrat.className}>
        <LocalStorageProvider>
          <Header>
            <HeaderContent lang={lang}>
              <Banner lang={lang} name="logotype" height={31} />
            </HeaderContent>
          </Header>
          <main>{children}</main>
          <Footer language={lang} />
        </LocalStorageProvider>
        <Chat language={lang} />
        <CartButton language={lang} />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_4_ID} />
    </html>
  );
}
