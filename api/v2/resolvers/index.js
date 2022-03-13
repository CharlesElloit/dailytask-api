const workspace = require("./workspace");
const user = require("./user");

module.exports = {
  Query: {
    ...workspace.Query,
  },
  Mutation: {
    ...user.Mutation,
    ...workspace.Mutation,
  },
};
