const Joi = require("joi");

const validateLogin = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().required().trim().strip()
      .email()
      .empty(),
    password: Joi.string().strip().required().min(6)
      .max(30)
      .trim()
      .empty()
      .pattern(new RegExp(/^[a-zA-Z0-9!@#$%&*]{3,25}$/)),
  });

  return loginSchema.validate(data);
};

module.exports = validateLogin;
