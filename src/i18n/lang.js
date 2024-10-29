import getLanguages from './langSettings';

const folderNames = ['common', 'products', 'blog', 'gallery'];

function lang(name, language = 'uk') {
  let data = '';
  folderNames.forEach((el) => {
    const langs = getLanguages(el, language);
    for (let index = 0; index < langs.length; index += 1) {
      if (langs[index][name]) {
        data = langs[index][name];
        return;
      }
    }
  });
  return data;
}

export default lang;
