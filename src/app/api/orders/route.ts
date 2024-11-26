import Tgfancy from 'tgfancy';

import { makeFieldsForOrder } from 'src/helpers/makeFields';
import lang from 'src/i18n/lang';
import { formatDimensions, formatValueWithUnit } from 'src/helpers/format';
import { Language } from 'src/types/language';
import { ProductInCart } from 'src/types/product';

const tokenOfBot = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_BOT_CHAT_ID;

const bot = new Tgfancy(tokenOfBot, {
  tgfancy: {
    emojification: true,
  },
});

function order(products: ProductInCart[], language: Language): string {
  return products
    .map((product) => {
      const fields = makeFieldsForOrder(language) as {
        name: string;
        field: string;
        unitOfMeasure: string;
      }[];

      const productDetails = fields.reduce<string[]>(
        (acc, { name, field, unitOfMeasure }) => {
          const value = product[field];

          if (value) {
            const formattedValue =
              field === 'dimensions'
                ? formatDimensions(product, language)
                : formatValueWithUnit(value, unitOfMeasure, language);

            acc.push(`${name}: ${formattedValue}\n`);
          }

          return acc;
        },
        []
      );

      return productDetails.join('');
    })
    .join('\n:shopping_trolley:\n');
}

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const {
      senderName,
      senderTel,
      messenger,
      country,
      comment,
      orderedProducts,
      totalSum,
      language,
      desiredColor,
      howDiscover,
    } = body;

    if (senderTel === '' || senderName === '' || country === '') {
      return Response.json(
        { status: 'fail', message: 'Bad request' },
        { status: 404 }
      );
    }
    const commentText = comment
      ? `\n:speech_balloon: ${lang('Comment')}: ${comment}`
      : '';

    const desiredColorText = desiredColor
      ? `\n:point_right: ${lang('DesiredColor')}: ${desiredColor}`
      : '';

    const howDiscoverText = howDiscover
      ? `\n:coffee: ${lang('HowDiscover')}: ${howDiscover}`
      : '';

    await bot.sendMessage(
      chatId,
      `:mage: ${lang('CustomerName')} ${senderName}
    \n:envelope:  ${lang('CustomerChosenMessenger')} ${messenger}
    \n:telephone_receiver:  ${lang('CustomerNumber')} ${senderTel}
    \n:globe_with_meridians: ${lang('Country')}: ${country}
    ${commentText}
    ${desiredColorText}
    ${howDiscoverText}
    \n
    \n:shopping_trolley:\n${order(orderedProducts, language)}


    \n:moneybag:${lang('Total')} ${totalSum} ${lang('Currency', language)}`
    );

    return Response.json({ status: 'success', message: 'Success' });
  } catch (error) {
    return Response.json(
      { status: 'fail', message: 'Server error' },
      { status: 500 }
    );
  }
}
