import clientPromise from 'src/services/mongodb/connect';

import { WithId } from 'mongodb';
import IReview from 'src/types/review';
import { ALL_PRODUCTS, Category } from 'src/data/constants';
import toKebabCase from 'src/helpers/toKebabCase';

export async function getAllReviews() {
  try {
    const client = await clientPromise;
    const db = client.db('kavoon');
    const collection = db.collection<IReview>('reviews');

    const data = await collection.find().toArray();
    return JSON.parse(JSON.stringify(data)) as WithId<IReview>[];
  } catch (error) {
    return [];
  }
}

export async function getReviews(productId?: string, categoryId?: Category) {
  try {
    const client = await clientPromise;
    const db = client.db('kavoon');
    const collection = db.collection<IReview>('reviews');

    const filter: any = { showOnSite: true };

    if (productId) {
      filter.productName = productId;
    } else if (categoryId && categoryId !== toKebabCase(ALL_PRODUCTS)) {
      filter.categoryId = categoryId;
    }

    const data = await collection.find(filter).toArray();
    return JSON.parse(JSON.stringify(data)) as WithId<IReview>[];
  } catch (error) {
    return [];
  }
}
