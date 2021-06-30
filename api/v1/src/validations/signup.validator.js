const Joi = require("joi");

const validateSignup = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().trim().email()
      .empty()
      .max(255),
    username: Joi.string().required().trim().strip()
      .min(3)
      .max(60)
      .empty(),
    password: Joi.string().min(6).max(30).required()
      .trim()
      .strip()
      .empty()
      .pattern(new RegExp(/^[a-zA-Z0-9!@#$%&*]{3,25}$/)),
  });
  return schema.validate(data);
};

module.exports = validateSignup;
