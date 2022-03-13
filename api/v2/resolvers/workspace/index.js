const { workspaces } = require("./Queries");
const { createWorkspace } = require("./Mutations");

module.exports = {
  Query: {
    workspaces,
  },
  Mutation: {
    createWorkspace,
  },
};
