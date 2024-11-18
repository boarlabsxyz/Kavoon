import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import { Network } from 'src/types/pickersProps';

function makeNetworksList(language: Language): Network[] {
  return [
    {
      name: 'Tiktok',
      value: translate('Tiktok', language),
    },
    {
      name: 'Linkedin',
      value: translate('Linkedin', language),
    },
    {
      name: 'Instagram',
      value: translate('Instagram', language),
    },
    {
      name: 'Facebook',
      value: translate('Facebook', language),
    },
    {
      name: 'Other',
      value: translate('Other', language),
    },
  ];
}

export default makeNetworksList;
