const { Workspace } = require("../../models");

/**
 * @swagger
 * /workspaces:
 *   get:
 *    summary: This return all workspace for a specific user account.
 *    tags: [Workspace]
 *    responses:
 *       200:
 *         description: The list of the workspace.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workspace'
 */
const getAllWorkspace = async (req, res) => {
  const workspaces = await Workspace.find({})
    .where("created.by").equals(req.user.userId);

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
