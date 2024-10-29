import lang from 'src/i18n/lang';

function MessengersList(language) {
  return [
    {
      name: 'Telegram',
      src: '/img/icons/telegram-icon.svg',
      placeholder: lang('UsernameOrPhoneNumber', language),
    },
    {
      name: 'Viber',
      src: '/img/icons/viber-icon.svg',
      placeholder: lang('UsernameOrPhoneNumber', language),
    },
    {
      name: 'Whatsapp',
      src: '/img/icons/whatsapp-icon.svg',
      placeholder: lang('PhoneNumber', language),
    },
  ];
}

export default MessengersList;
