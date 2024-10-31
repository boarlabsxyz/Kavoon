import clientPromise from 'src/services/mongodb/connect';

import { WithId } from 'mongodb';
import IReview from 'src/types/review';

async function getAllReviews(filter: Partial<IReview> = {}) {
  try {
    const client = await clientPromise;
    const db = client.db('kavoon');
    const collection = db.collection<IReview>('reviews');
    const data = await collection.find(filter).toArray();

    return JSON.parse(JSON.stringify(data)) as WithId<IReview>[];
  } catch (error) {
    return [];
  }
}

export default getAllReviews;
