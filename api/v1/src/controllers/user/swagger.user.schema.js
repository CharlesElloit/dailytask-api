/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - _id
 *        - username
 *        - email
 *        - avatar
 *        - password
 *        - created
 *      properties:
 *        _id:
 *          type: string
 *          description: This unique identifier for a specific object
 *        username:
 *          type: string
 *          required: true
 *          description: username of the user.
 *        email:
 *          type: string
 *          required: true
 *          description: Email of the user.
 *        avatar:
 *          type: string
 *          description: Avatar or profile pic of the user.
 *        password:
 *          type: string
 *          required: true
 *          description: Password of the user.
 *        createdAt:
 *          type: Date
 *          default: Date.now
 *          description: The date the object is created.
 *        updatededAt:
 *          type: Date
 *          default: Date.now
 *          description: The date the object is updated.
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: This is for the user routes.
 */
