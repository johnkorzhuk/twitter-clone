import faker from 'faker';

import Tweet from '../models/Tweet';
import User from '../models/User';

const TOTAL_TWEETS = 10;

export default async () => {
  try {
    await Tweet.remove();
    await User.remove();

    await Array.from({ length: TOTAL_TWEETS }).forEach(async () => {
      await Tweet.create({ text: faker.lorem.paragraphs(1) });
    });
  } catch (error) {
    throw error;
  }
};
