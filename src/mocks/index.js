import faker from 'faker';

import Tweet from '../models/Tweet';

const TOTAL_TWEETS = 10;

export default async () => {
  try {
    await Tweet.remove();

    await Array.from({ length: TOTAL_TWEETS }).forEach(async () => {
      await Tweet.create({ text: faker.lorem.paragraphs(1) });
    });
  } catch (error) {
    throw error;
  }
};
