import { Montserrat } from 'next/font/google';

import 'src/app/global.css';
import 'modern-normalize/modern-normalize.css';

type Props = {
  children: React.ReactNode;
};

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function StatusReviewsLayout({ children }: Props) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
