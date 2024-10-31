/* eslint-disable import/prefer-default-export */
import translate from 'src/i18n/lang';
import Tgfancy from 'tgfancy';

process.env.NTBA_FIX_319 = '1';
const tokenOfBot = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_BOT_CHAT_ID;

type Types = {
  senderName: string;
  senderTel: string;
  messenger: string;
  message: string;
};

const bot = new Tgfancy(tokenOfBot, {
  tgfancy: {
    emojification: true,
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { senderName, senderTel, messenger, message }: Types = body;

    if (senderTel === '' || senderName === '' || message === '') {
      return Response.json(
        { statuse: 'fail', message: 'Bad request' },
        { status: 404 }
      );
    }

    await bot.sendMessage(
      chatId,
      `:fire::fire::fire: ${translate('ReceivedMessage')}
         \n:mage: ${translate('CustomerName')} ${senderName}
         \n:envelope: ${translate('CustomerChosenMessenger')} ${messenger}
         \n:telephone_receiver: ${translate('CustomerNumber')} ${senderTel}
         \n:memo: ${translate('Message')}: ${message}`
    );
    return Response.json({ status: 'success', message: 'Success' });
  } catch (error) {
    return Response.json(
      { status: 'fail', message: 'Server error' },
      { status: 500 }
    );
  }
}
