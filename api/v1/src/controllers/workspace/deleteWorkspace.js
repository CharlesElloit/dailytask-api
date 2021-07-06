const { Workspace } = require("../../models");

/**
 * @swagger
 * /workspace/{id}:
 *  delete:
 *    summary: This delete a specific workspace.
 *    tags: [Workspace]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of workspace to delete.
 *    responses:
 *      200:
 *        description: workspace deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Workspace'
 */

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
