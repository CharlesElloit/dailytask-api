"use strict"

const db = require("../../models");
const { validateWorkspace } = require("../../validations/workspace.validations")

const updateWorkspace = async (req, res) => {
  const { error } = validateWorkspace(req.body);
  if(error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  const workspaceData = new db.Workspace({
    _id: req.params.id,
    title: req.body.title,
  });

  const updatedWorkspace = await db.Workspace.findOneAndUpdate(
    { _id: req.params.id },
    workspaceData,
    { new: true, runValidator: true, context: "query" }
  )
  
  if(!updatedWorkspace) {
    return res.status(500).json({
      message: "something went wrong."
    })
  }

  res.status(200).json({
    success: true,
    id: workspaceData._id,
    message: "Workspace updated.",
  })
};

module.exports = updateWorkspace;
