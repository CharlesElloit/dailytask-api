const Joi = require("joi");

exports.validateWorkspace = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().trim().strip()
      .empty()
      .max(100)
      .min(3),
  });
  return schema.validate(data);
};
