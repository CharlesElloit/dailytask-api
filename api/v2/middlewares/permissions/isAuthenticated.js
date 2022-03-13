/* eslint-disable prefer-destructuring */
/* eslint-disable dot-notation */
const { rule } = require("graphql-shield");
const jwt = require("jsonwebtoken");

module.exports = rule()(async (_parent, _args, context, _info) => {
  let token;
  const authorization = context.headers["accesstoken"];
  if (authorization && authorization.startsWith("Bearer ")) {
    token = authorization.split(" ")[1];
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verified) return false;
    context.user = { userId: verified.userId };
    return true;
  }
});
