const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (email, userName, password) => {
  const hash = await bcrypt.hash(password, 10);

  return User.create({
    email,
    userName,
    password: hash,
  });
};

exports.login = async (email, password) => {
  const validUser = await User.findOne({ where: { email } });

  const validPassword = await bcrypt.compare(password, validUser.password);

  return { validUser, validPassword };
};

exports.createJwt = (userId) => {
  return jwt.sign({ userId }, `${process.env.SECRET}`, {
    expiresIn: "24h",
  });
};
