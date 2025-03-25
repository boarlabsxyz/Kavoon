import metaData from './metaData.js';

const getMeta = (locale) => {
  const metaForLocale = {};
  Object.keys(metaData).forEach((key) => {
    if (metaData[key][locale]) {
      metaForLocale[key] = metaData[key][locale];
    }
  });
  return metaForLocale;
};

export default getMeta;
