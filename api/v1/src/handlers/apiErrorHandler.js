// checkError
exports.catchErrors = (func) => (req, res, next) => func(req, res, next).catch((error) => {
  if (typeof error === "string") {
    return res.status(400).json({
      errorMessage: error,
    });
  }
  next(error);
});
