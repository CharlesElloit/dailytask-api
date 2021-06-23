const { Workspace } = require("../../models");

const deleteWorkspace = async (req, res, next) => {
  const workspace = await Workspace.findOneAndDelete({ _id: req.params.id });
  if (!workspace) {
    return res.status(500).json({
      success: false,
      message: "Workspace can't be deleted. try again!",
    });
  }
  res.status(200).json({
    success: true,
    id: workspace._id,
    message: "Workspace deleted.",
  });
};

module.exports = deleteWorkspace;
