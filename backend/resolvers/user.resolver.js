import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (parent, { userId }) => {
      return users.find((user) => user._id === userId);
    },
  },
};

export default userResolver;
