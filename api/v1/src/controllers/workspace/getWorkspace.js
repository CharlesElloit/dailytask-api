const collection = require("../../models");

const getWorkspace = async (req, res) => {
  const workspace = await collection.Workspace.findOne(
    { _id: req.params.id },
  );
  if (!workspace) return res.status(404).json({ message: "Not found" });
  res.status(200).json({
    success: true,
    results: workspace,
  });
};

module.exports = getWorkspace;
