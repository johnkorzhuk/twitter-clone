import GraphQLDate from 'graphql-date';

import tweetResolvers from './tweet';
import userResolvers from './user';
import User from '../../models/User';

export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({ user: userID }) => User.findById(userID),
  },
  Query: {
    getTweet: tweetResolvers.getTweet,
    getTweets: tweetResolvers.getTweets,
    getOwnTweets: tweetResolvers.getOwnTweets,
    me: userResolvers.me,
  },
  Mutation: {
    createTweet: tweetResolvers.createTweet,
    updateTweet: tweetResolvers.updateTweet,
    deleteTweet: tweetResolvers.deleteTweet,
    signup: userResolvers.signup,
    login: userResolvers.login,
  },
};
