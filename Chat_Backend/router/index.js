const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const chatRoutes = require('./chat');

router.get("/home", (req, res) => {
  res.send("Home screen");
});

router.use('/', authRoutes);
router.use("/users", userRoutes);
router.use("/chats", chatRoutes);


module.exports = router;