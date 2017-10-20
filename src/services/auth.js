import jwt from 'jsonwebtoken';

import constants from '../config/constants';
import User from '../models/User';

export async function requireAuth(user) {
  try {
    const me = await User.findById(user._id);
    if (!me) throw new Error('Unauthorized');

    return me;
  } catch (error) {
    throw error;
  }
}

export function decodeToken(token) {
  const arr = token.split(' ');
  if (arr[0] === 'Bearer') {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error('Invalid token!');
}
