const { Workspace } = require("../../models");
const { validateWorkspace } = require("../../validations/workspace.validations");

const createWorkspace = async (req, res, next) => {
  const { error } = await validateWorkspace(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  const workspace = new Workspace({
    title: req.body.title,
  });

  // TODO: Instead of checking with the title, check if the in user's has a
  // workspace with the same name provided.
  const isTitleExist = await Workspace.findOne({ title: req.body.title });
  if (isTitleExist) {
    return res.status(400).json({
      success: false,
      message: `The workspace ${req.body.title} already exists on this account.`,
    });
  }
  if (!workspace) {
    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
  await workspace.save();
  res.status(201).json({
    success: true,
    id: workspace._id,
    message: "Workspace created successfully",
  });
};

module.exports = createWorkspace;
