const { Workspace } = require("../../models");
const { validateWorkspace } = require("../../validations/workspace.validations");

/**
 * @swagger
 * /workspaces/add:
 *   post:
 *    summary: This creates new workspace for a specific user.
 *    tags: [Workspace]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 required: true
 *                 description: The name for the workspace
 *    responses:
 *       201:
 *         description: Workspace created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workspace'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server Error.
 */
const createWorkspace = async (req, res, next) => {
  const { error } = await validateWorkspace(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  const workspace = new Workspace({
    title: req.body.title,
    created: {
      by: req.user.userId,
    },
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
