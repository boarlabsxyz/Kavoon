import React from 'react';

import { i18n } from 'src/i18n/config';

type Props = {
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const dynamicParams = false;

function CategoryPageLayout({ children }: Props) {
  return <>{children}</>;
}

export default CategoryPageLayout;
