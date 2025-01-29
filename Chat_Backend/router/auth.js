const router = require("express").Router();
const { login, register } = require("./../controllers/authController");
const { validate } = require("./../validators");
const { rules: loginRules } = require("./../validators/auth/login");
const { rules: registrationRules } = require("./../validators/auth/register");

router.post("/login", [loginRules, validate], login);

router.post("/register", [registrationRules, validate], register);

module.exports = router;
