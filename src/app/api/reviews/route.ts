import { InsertOneResult, ObjectId } from 'mongodb';
import Tgfancy from 'tgfancy';

import lang from 'src/i18n/lang';
import clientPromise from 'src/services/mongodb/connect';
import IReview from 'src/types/review';

process.env.NTBA_FIX_319 = '1';
const tokenOfBot = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_BOT_CHAT_ID;

const bot = new Tgfancy(tokenOfBot, {
  tgfancy: {
    emojification: true,
  },
});

type Review = Omit<IReview, '_id'>;

function capitalize(str: string) {
  return str
    .split('-')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join('');
}

function createTelegramMessage(review: Review) {
  const { images, productName, userName, rating, comment } = review;

  const imageUrl = images.length > 0 ? images.join('\n\n') : '\u268A';

  return `:fire: ${lang('ReceivedReview')}
\n:shopping_bags: ${lang('ProductName')}: ${lang(capitalize(productName))}
\n:mage: ${lang('CustomerName')} ${userName}
\n:star: ${lang('Mark')}: ${rating}
\n:memo: ${lang('ReviewText')}: ${comment || '\u268A'}
\n:eyes: ${lang('Photo')}: ${imageUrl}`;
}

export async function POST(request: Request) {
  const review: Review = await request.json();
  const message = createTelegramMessage(review);

  let result: InsertOneResult<Review>;
  try {
    const client = await clientPromise;
    const collection = client.db('kavoon').collection<Review>('reviews');
    result = await collection.insertOne(review);
  } catch (error) {
    return Response.json(
      { status: 'failure', error: error.message },
      { status: 500 }
    );
  }

  try {
    await bot.sendMessage(chatId, message);
    return Response.json({ status: 'ok', data: { reviews: result } });
  } catch (error) {
    return Response.json(
      { status: 'failure', error: error.message },
      { status: 500 }
    );
  }
}

type Payload = {
  _id: string;
  updates: Partial<IReview>;
};

export async function PATCH(request: Request) {
  const { _id, updates }: Payload = await request.json();
  try {
    const client = await clientPromise;
    const collection = client.db('kavoon').collection<Review>('reviews');
    const filter = { _id: new ObjectId(_id) };
    const update = { $set: updates };
    await collection.updateOne(filter, update);
    return Response.json({ status: 'success' });
  } catch (error) {
    return Response.json({ status: 'fail', error: error.message });
  }
}
