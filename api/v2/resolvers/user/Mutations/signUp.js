/* eslint-disable max-len */
/* eslint-disable camelcase */
const { UserInputError, ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { User } = require("../../../models");

const signUp = async (_parent, args) => {
  const {
    username, confirm_password, email, password,
  } = args.user;

  const isUserExist = await User.findOne({ email });

  if (!isUserExist) {
    if (password && password.length > 6 && password === confirm_password) {
      const hash = await bcrypt.hash(password, 12);

      const user = await new User({ email, username, password: hash });
      await user.save();
      return {
        id: user._id,
        message: "Account created successfully!",
      };
    }
    throw new UserInputError("Invalid credentials", {
      errors: { passowordError: "Invalid credentials please try again." },
    });
  } else {
    throw new UserInputError("User already exit", {
      errors: { email: "Email already exit" },
    });
  }
};

module.exports = signUp;
