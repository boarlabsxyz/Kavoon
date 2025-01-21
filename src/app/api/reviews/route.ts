import { NextRequest } from 'next/server';

import { InsertOneResult, ObjectId } from 'mongodb';
import Tgfancy from 'tgfancy';

import { ALL_PRODUCTS, Category } from 'src/data/constants';
import toKebabCase from 'src/helpers/toKebabCase';
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

  const formattedProductName =
    productName !== null ? lang(capitalize(productName)) : '';

  const imageUrl = images.length > 0 ? images.join('\n\n') : '\u268A';

  return `:fire: ${lang('ReceivedReview')}
\n:shopping_bags: ${lang('ProductName')}: ${formattedProductName}
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId') || undefined;
  const categoryId = searchParams.get('categoryId') as Category | undefined;
  const showOnSite = searchParams.get('showOnSite') as string | undefined;

  try {
    const client = await clientPromise;
    const db = client.db('kavoon');
    const collection = db.collection<IReview>('reviews');

    const filter: any = { isActive: true };

    if (showOnSite === 'true') {
      filter.showOnSite = true;
    }

    if (productId) {
      filter.productName = productId;
    } else if (categoryId && categoryId !== toKebabCase(ALL_PRODUCTS)) {
      filter.categoryId = categoryId;
    }

    const data = await collection.find(filter).toArray();
    return Response.json({
      success: true,
      data: data,
      count: data.length,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to fetch reviews',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
