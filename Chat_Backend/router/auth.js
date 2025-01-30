const router = require("express").Router();

const {
  loginController,
  registerController,
} = require("./../controllers/authController");

const { validate } = require("./../validators");
const { rules: loginRules } = require("./../validators/auth/login");
const { rules: registrationRules } = require("./../validators/auth/register");

router.post("/login", [loginRules, validate], loginController);

router.post("/register", [registrationRules, validate], registerController);

module.exports = router;
