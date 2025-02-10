const User = require("./../models").User;
const sequelize = require("sequelize");

module.exports.update = async (req, res) => {
  try {
    // getting user from middleware's token
    const id = req.user.id;
    // User.update doesn't exec hooks from Model
    // so why we specified individualHooks: true
    const [rows, result] = await User.update(req.body, {
      where: { id },
      returning: true, // number of rows affected by update and the updated rows
      individualHooks: true,
    });

    const user = result[0].get({ raw: true });
    user.avatar = result[0].avatar;
    delete user.password;

    res.send(user);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};
