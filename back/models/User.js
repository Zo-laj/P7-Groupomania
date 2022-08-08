const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class User extends Model {
  // static associate(models) {
  //   models.User.hasMany(models.Post, { onDelete: "CASCADE" });
  //   models.User.hasMany(models.Like, { onDelete: "CASCADE" });
  // }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
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
