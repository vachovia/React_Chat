const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');

router.get("/home", (req, res) => {
  res.send("Home screen");
});

router.use('/', authRoutes);
router.use("/users", userRoutes);

module.exports = router;