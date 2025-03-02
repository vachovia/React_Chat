const router = require("express").Router();
const { index: chatController } = require("./../controllers/chatController");
const { auth: authMiddleware } = require("./../middleware/auth");

router.get("/", [authMiddleware], chatController);

module.exports = router;
