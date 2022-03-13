const { shield } = require("graphql-shield");
const isAuthenticated = require("./isAuthenticated");

module.exports = shield({
  Query: {
    workspaces: isAuthenticated,
  },
  Mutation: {
  },
});
