const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(10),
    validate: {
      is: /^[0-9a-f]{10}$/i,
    },
  },
});

module.exports = sequelize.model("user", User);
