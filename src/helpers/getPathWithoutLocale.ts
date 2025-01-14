export const getPathWithoutLocale = (pathname: string): string => {
  if (!pathname || typeof pathname !== 'string') {
    throw new Error('Invalid pathname');
  }
  const segments = pathname.split('/');
  console.log('segments', segments);
  if (segments.length < 3) {
    console.log('inside segments.length < 3');
    return '';
  }
  return pathname.split('/').slice(2).join('/');
};
