export const getPathWithoutLocale = (pathname: string): string => {
  return pathname.split('/').slice(2).join('/');
};
