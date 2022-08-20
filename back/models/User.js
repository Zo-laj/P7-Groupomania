const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");
const Like = require("./Like");
const Post = require("./Post");

class User extends Model {}

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
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});
User.hasMany(Like, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = User;
