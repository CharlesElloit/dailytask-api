const { Workspace } = require("../../models");

const createWorkspace = async (req, res, next) => {
  const workspace = new Workspace({
    title: req.body.title,
  });
  if (!workspace) {
    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
  await workspace.save();
  res.status(201).json({
    sucess: true,
    id: workspace._id,
    message: "Workspace created successfully",
  });
};

module.exports = createWorkspace;
