const { Project } = require("../../models");

const createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    workspace: req.body.workspace,
    bgColor: req.body.bgColor,
    create: {
      by: req.user.userId,
    },
    update: {
      by: req.user.userId,
    },
  });
  if (!project) {
    return res.status(400).jsn({
      message: "something went wrong when creating the project.",
    });
  }
  const newProject = await Project.create(project);
  if (!newProject) {
    return res.status(500).json({
      message: "something went wrong.",
    });
  }
  res.json({
    success: true,
    id: project._id,
    message: "project created successfully!",
  });
};

module.exports = createProject;
