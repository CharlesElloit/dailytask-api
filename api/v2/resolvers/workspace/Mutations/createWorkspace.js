const { UserInputError } = require("apollo-server-express");
const { Workspace } = require("../../../models");

const createWorkspace = async (_parent, { input }, _context, _info) => {
  const { title, owner } = input;
  const workspace = new Workspace({ title, owner });
  // TODO: Instead of checking with the title, check if the in user's has a
  // workspace with the same name provided.
  const isTitleExists = await Workspace.findOne({ title });
  if (isTitleExists) {
    throw new UserInputError("Workspace_Name_Error", {
      errors: { workspaceNameError: "Workspace name already used." },
    });
  }

  const newWorkspace = await workspace.save();
  return {
    id: newWorkspace._id,
    message: "workspace created successfully!",
  };
};

module.exports = createWorkspace;
