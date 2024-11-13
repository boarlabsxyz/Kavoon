import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';
import { Messenger } from 'src/types/pickersProps';

function MakeMessengersList(language: Language): Messenger[] {
  return [
    {
      name: 'Telegram',
      src: '/icons/telegram-icon.svg',
      placeholder: lang('UsernameOrPhoneNumber', language),
    },
    {
      name: 'Viber',
      src: '/icons/viber-icon.svg',
      placeholder: lang('UsernameOrPhoneNumber', language),
    },
    {
      name: 'Whatsapp',
      src: '/icons/whatsapp-icon.svg',
      placeholder: lang('PhoneNumber', language),
    },
  ];
}

export default MakeMessengersList;
