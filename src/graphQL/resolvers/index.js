import GraphQLDate from 'graphql-date';

import tweet from './tweet';
import user from './user';

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: tweet.getTweet,
    getTweets: tweet.getTweets,
  },
  Mutation: {
    createTweet: tweet.createTweet,
    updateTweet: tweet.updateTweet,
    deleteTweet: tweet.deleteTweet,
    signup: user.signup,
    login: user.login,
  },
};
