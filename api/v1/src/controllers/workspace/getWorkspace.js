const collection = require("../../models");

/**
 * @swagger
 * /workspace/{id}:
 *   get:
 *     summary: Get single workspace by it's id.
 *     tags: [Workspace]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The worksppace id
 *     responses:
 *       200:
 *         description: successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workspace'
 *       404:
 *         description: Workspace not found.
 */
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
