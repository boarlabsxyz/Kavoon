const getImageQuality = (src: string): number => {
  const isLocal = src.startsWith('/');

  return isLocal ? 100 : 75;
};

export default getImageQuality;
