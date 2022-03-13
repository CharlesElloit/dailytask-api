const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserInputError } = require("apollo-server-express");
const { User } = require("../../../models");

const signIn = async (_parent, { user: { email, password } }, context, _info) => {
  // validate the input.
  // make sure the user exists
  const accountExists = await User.findOne({ email }).select("password");
  if (!accountExists) { throw new UserInputError("account not exists", { error: "Invalid credentials." }); }

  // compare password to the hash password
  const valid = await bcrypt.compare(password, accountExists.password);
  if (!valid) { throw new UserInputError("wrong credentials", { error: "Invalid credentials." }); }

  // generate token
  const payload = { _id: accountExists.id };

  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  });

  context.user = payload;
  return { token };
};

module.exports = signIn;
