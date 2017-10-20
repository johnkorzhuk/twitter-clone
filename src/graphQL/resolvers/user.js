import User from '../../models/User';

export default {
  signup: (_, { fullName, ...rest }) => {
    const [firstName, ...lastName] = fullName.split(' ');

    return User.create({
      firstName,
      lastName: lastName.join(' '),
      ...rest,
    });
  },
  login: async (_, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) throw new Error(`User doesn't exist!`);

    if (!user.authenticateUser(password)) {
      throw new Error(`Password doesn't match!`);
    }

    return user;
  },
};
