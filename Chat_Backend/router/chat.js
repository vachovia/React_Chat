const router = require("express").Router();
const { index, create, messages, deleteChat } = require("./../controllers/chatController");
const { auth: authMiddleware } = require("./../middleware/auth");

router.get("/", [authMiddleware], index);
router.get("/messages", [authMiddleware], messages);
router.post("/create", [authMiddleware], create);
router.delete("/:id", [authMiddleware], deleteChat);

module.exports = router;
