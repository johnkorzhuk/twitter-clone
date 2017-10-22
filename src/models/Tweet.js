import mongoose, { Schema } from 'mongoose';

const TweetSchema = new Schema(
  {
    text: {
      type: String,
      minlength: [5, 'Tweets must have a minimun length of 5'],
      maxlength: [133, 'Tweets must have a maximum length of 144'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    favoriteCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Tweet', TweetSchema);
