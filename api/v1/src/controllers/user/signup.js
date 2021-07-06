const bcrypt = require("bcrypt");
const collection = require("../../models");
const validateSignup = require("../../validations/signup.validator");

/**
 * @swagger
 * /signup:
 *   post:
 *    summary: This signup or creates new user.
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *               - password again
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *                 description: The email
 *               username:
 *                 type: string
 *                 required: true
 *                 description: The username.
 *               password:
 *                 type: string
 *                 required: true
 *                 description: The password for this account
 *               passwordAgain:
 *                 type: string
 *                 required: true
 *                 description: Confirm password
 *    responses:
 *       200:
 *         description: user created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server Error.
 */

const signup = async (req, res) => {
  const { error } = await validateSignup(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  const { email, username, password } = req.body;

  const emailTaken = await collection.User.findOne({ email });
  if (!emailTaken) {
    const usernameTaken = await collection.User.findOne({ username });
    if (!usernameTaken) {
      const hashedPassword = await bcrypt.hash(password, 12);
      if (!hashedPassword) {
        return res.status(500).json({
          passwordError: "something went wrong please try again.",
        });
      }
      const newUser = new collection.User({
        email, username, password: hashedPassword,
      });
      const savedUser = await collection.User.create(newUser);
      if (!savedUser) {
        return res.status(500).json({
          success: false,
          message: "Oops something went wrong!",
        });
      }
      res.status(201).json({
        success: true,
        id: savedUser._id,
        message: "User created successfully.",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Username or Eamil already taken",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Username or Email is already taken",
    });
  }
};

module.exports = signup;
