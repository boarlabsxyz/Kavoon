import { NextRequest, NextResponse } from 'next/server';
import { i18n } from 'src/i18n/config';

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const language = req.headers.get('accept-language');
    const isRU = language?.startsWith('ru');
    const isUA = language?.startsWith('uk');
    const isPL = language?.startsWith('pl');

    if (!isRU && !isUA && !isPL) {
      return NextResponse.redirect(
        new URL(`/${i18n.defaultLocale}${pathname}`, req.url)
      );
    }

    if (isPL) {
      return NextResponse.redirect(new URL(`/pl${pathname}`, req.url));
    }

    if (isRU || isUA) {
      return NextResponse.redirect(new URL(`/uk${pathname}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: '/((?!.*\\.|status-reviews|api).*)' };
