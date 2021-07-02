const jwt = require("jsonwebtoken");

module.exports.auth = async (req, _res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization && authorization.startsWith("Bearer ")) {
      const token = authorization.split(" ")[1];
      const verified = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (!verified) return res.status(403).json({ message: "Unauthorized access" });
      req.user = verified;
      next();
    } else {
      throw new Error("Unauthorized access");
    }
  } catch (error) {
    console.log(error);
  }
};
