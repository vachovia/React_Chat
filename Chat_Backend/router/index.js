const router = require('express').Router();

const authRoutes = require('./auth');

router.get("/home", (req, res) => {
  res.send("Home screen");
});

router.use('/', authRoutes);

module.exports = router;