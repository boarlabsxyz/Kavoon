import translate from 'src/i18n/lang';
import { Language } from 'src/types/language';
import { Messenger } from 'src/types/pickersProps';

function MakeMessengersList(language: Language): Messenger[] {
  return [
    {
      name: 'Telegram',
      src: '/icons/telegram-icon.svg',
      placeholder: translate('UsernameOrPhoneNumber', language),
    },
    {
      name: 'Viber',
      src: '/icons/viber-icon.svg',
      placeholder: translate('UsernameOrPhoneNumber', language),
    },
    {
      name: 'Whatsapp',
      src: '/icons/whatsapp-icon.svg',
      placeholder: translate('PhoneNumber', language),
    },
  ];
}

export default MakeMessengersList;
