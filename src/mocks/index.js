import faker from 'faker';

import User from '../models/User';
import Tweet from '../models/Tweet';

const TOTAL_USERS = 3;
const TOTAL_TWEETS = 3;

export default async () => {
  try {
    await Tweet.remove();
    await User.remove();

    await Array.from({ length: TOTAL_USERS }).forEach(async (_, index) => {
      const user = await User.create({
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: `https://randomuser.me/api/portraits/women/${index}.jpg`,
        password: 'password123',
      });

      await Array.from({ length: TOTAL_TWEETS }).forEach(async () => {
        await Tweet.create({ text: faker.lorem.sentence(), user: user._id });
      });
    });
  } catch (error) {
    throw error;
  }
};
