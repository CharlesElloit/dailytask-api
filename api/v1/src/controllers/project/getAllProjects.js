const { Project } = require("../../models");

// This gets all projects for a specific workspace.
const getAllProjects = async (req, res) => {
  const projects = await Project.find({})
    .where("workspace").equals(req.params.workspaceId);

  if (!projects) {
    return res.status(404).json({
      success: true,
      message: "No project found!",
    });
  }
  res.status(200).json({
    success: true,
    results: projects,
  });
};

module.exports = getAllProjects;
