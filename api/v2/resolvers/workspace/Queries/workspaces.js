const { Workspace } = require("../../../models");

const getWorkspaces = async (_parent, _args, context, _info) => {
  const { id } = context.headers;
  const workspaces = await Workspace.find({})
    .where("owner").equals(id).populate("owner");
  if (!workspaces) {
    return new UserInputError("Your don't have any workspaces");
  }
  return workspaces;
};

module.exports = getWorkspaces;
