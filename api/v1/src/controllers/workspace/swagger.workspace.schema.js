/**
 * @swagger
 * components:
 *  schemas:
 *    Workspace:
 *      type: object
 *      required:
 *        - title
 *        - created.by
 *      properties:
 *        _id:
 *          type: string
 *          description: This unique identifier for a specific object
 *        title:
 *          type: string
 *          required: true
 *          description: This is the name of the workspace.
 *        created:
 *          type: object
 *          required:
 *            - at
 *            - by
 *          properties:
 *            at:
 *             type: Date
 *             default: Date.now
 *             required: true
 *             description: The time when the object is created.
 *            by:
 *             type: string
 *             required: true
 *             description: The Id of the user who created this object.
 *        updatedAt:
 *          type: Date
 *          required: true
 *          default: Date.now
 */

/**
 * @swagger
 * tags:
 *   name: Workspace
 *   description: This is for the workspaces actions.
 */
