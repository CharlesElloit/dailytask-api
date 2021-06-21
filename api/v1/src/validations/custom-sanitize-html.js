const sanitizeHtml = require('sanitize-html');

module.exports = function htmlStrip (joi) {
  return {
    name: 'string',
    base: joi.string(),
    language: {
      htmlStrip: 'should not be empty html tags, (e.g.): <p> hi </p>',
    },
    rules: [{
      name: 'htmlStrip',
      validate(params, value, state, options) {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });

        if (clean) {
          return clean;
        }
        return this.createError('string.htmlStrip', { value }, state, options);
      },
    }],
  };
};


const SanitizeHtml = require('sanitize-html');
// const htmlStrip = require("./custom-sanitize-htmlze-html");

// const Joi = BaseJoi.extend(htmlStrip);
const customJoi = Joi.extend(function(joi) {
  return {
    type: 'string',
    base: joi.string(),
    rules: {
      htmlStrip: {
        validate(params, value, state, options) {
          const clean = SanitizeHtml(value, {
            allowedTags: [],
            allowedAttributes: {},
          });
          if (clean) return clean;
          return this.createError('string.htmlStrip', { value }, state, options);
        },
      },
    },
  };
});
