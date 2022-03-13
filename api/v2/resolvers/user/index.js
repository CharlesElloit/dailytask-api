const { signUp, signIn } = require("./Mutations");

module.exports = {
  Query: {},
  Mutation: {
    signUp,
    signIn,
  },
};
