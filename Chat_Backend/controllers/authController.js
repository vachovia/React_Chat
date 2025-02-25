const User = require("./../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../config/app");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find user
    const user = await User.findOne({
      where: {
        email,
      },
    });

    //check if user found
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    //check if password correct
    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Incorrect password!",
      });
    }

    // generate jwt - user is sequelize object and not flat
    const rawUser = user.get({ raw: true });
    const userWithToken = generateToken(rawUser);
    userWithToken.user.avatar = user.avatar;

    res.send(userWithToken);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const rawUser = req.body;
    const newUser = await User.create(rawUser);

    const flatUser = newUser.get({ raw: true });
    const userWithToken = generateToken(flatUser);

    res.send(userWithToken);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const generateToken = (user) => {
  delete user.password;
  const token = jwt.sign(user, config.appKey, { expiresIn: 30 }); //    86400
  return { ...{ user }, ...{ token } };
};
