import BrandingConst from 'src/data/brandingConst';
import InstagramIcon from 'src/icons/instagramIcon';
import FacebookIcon from 'src/icons/facebookIcon';
import TikTokIcon from 'src/icons/tikTokIcon';
import en from 'src/i18n/en/common';
import pl from 'src/i18n/pl/common';
import uk from 'src/i18n/uk/common';
import { LanguageSwitcherType } from 'src/types/language';

export const languages: LanguageSwitcherType[] = [
  {
    src: en.LanguageImg,
    name: en.LanguageName,
    langCode: 'EN',
    locale: 'en',
  },
  {
    src: uk.LanguageImg,
    name: uk.LanguageName,
    langCode: 'UA',
    locale: 'uk',
  },
  {
    src: pl.LanguageImg, // TODO: change icon
    name: pl.LanguageName,
    langCode: 'PL',
    locale: 'pl',
  },
];

export const socialsNetworks = [
  {
    url: BrandingConst.siteFacebook,
    label: 'facebook-link',
    component: FacebookIcon,
    width: '16',
    height: '26',
  },
  {
    url: BrandingConst.siteInstagram,
    label: 'instagram-link',
    component: InstagramIcon,
    width: '22',
    height: '22',
  },
  {
    url: BrandingConst.siteTikTok,
    label: 'tiktok-link',
    component: TikTokIcon,
    width: '24',
    height: '25',
  },
];
