/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-require-imports */
function getLanguages(domain, language) {
  const en = require(`./en/${domain}`).default;
  const uk = require(`./uk/${domain}`).default;
  const pl = require(`./pl/${domain}`).default;
  if (language === 'en') {
    return [en, uk, pl];
  }
  if (language === 'uk') {
    return [uk, pl, en];
  }
  return [pl, en, uk];
}
/* eslint-enable @typescript-eslint/no-require-imports */

export default getLanguages;
