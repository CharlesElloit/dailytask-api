const db = require("../../models");

const searchWorkspace = async (req, res) => {
  const { q } = req.query;
  const result = await db.Workspace.find({
    $text: {
      $search: q,
    },
  });
  if (result) {
    return res.status(200).json({
      result,
    });
  }
  res.status(400).json({
    message: "good to go",
  });
};

module.exports = searchWorkspace;
