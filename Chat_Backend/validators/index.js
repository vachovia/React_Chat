const { validationResult } = require("express-validator");

exports.validate = (req, res, next) => {
  // validationResult checks if previous validation
  // rules are failed e.g. body("email").isEmail(),
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
