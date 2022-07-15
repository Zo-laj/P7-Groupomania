const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      // validate: {
      //   isEmail: true,
      // },
      // allowNull: false,
      // unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
