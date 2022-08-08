const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Like extends Model {}

Like.init(
  {
    postId: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Like",
  }
);

module.exports = Like;
