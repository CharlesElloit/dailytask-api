const { Workspace } = require("../../models");

const getAllWorkspace = async (req, res, next) => {
  const workspaces = await Workspace.find({});

  if (workspaces && workspaces.length <= 0) {
    res.status(200).json({
      success: true,
      message: "No data!",
      ressults: [],
    });
  }
  if (workspaces && workspaces.length > 0) {
    res.status(200).json({
      success: true,
      results: workspaces,
    });
  }
};

module.exports = getAllWorkspace;
