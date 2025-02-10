const router = require("express").Router();
const {
  update: userController,
} = require("./../controllers/userController");
const { validate } = require("./../validators");
const { auth: authMiddleware } = require("./../middleware/auth");
const { rules: updateUserRules } = require("./../validators/user/update");

router.post("/update", [authMiddleware, updateUserRules, validate], userController);

module.exports = router;
