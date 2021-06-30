const { Project } = require("../../models");

const createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    workspace: req.body.workspace,
    bgColor: req.body.bgColor,
    create: {
      by: req.headers.user.id,
    },
    update: {
      by: req.headers.user.id,
    },
  });

  res.json({
    message: "it's working.",
  });
};

module.exports = createProject;
