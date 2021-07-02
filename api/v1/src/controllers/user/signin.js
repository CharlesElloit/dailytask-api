const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const collection = require("../../models");
const validateLogin = require("../../validations/signin.validator");

const signin = async (req, res) => {
  const { error } = await validateLogin(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  const userInfo = await collection.User.findOne({ email: req.body.email }, { password: 1 });
  if (userInfo) {
    const valid = await bcrypt.compare(req.body.password, userInfo.password);
    if (valid) {
      const { _id, username, email } = userInfo;
      const payload = { userId: _id, username, email };

      const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
      req.headers.authorization = token;
      res.status(200).json({ token });
    } else {
      return res.status(400).send({
        error: "Email or Password was incorrect",
      });
    }
  } else {
    return res.status(400).send({
      error: "Email or Password was incorrect",
    });
  }
};

module.exports = signin;
