const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Like extends Model {}

Like.init(
  {
    likeStatus: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Like",
  }
);

module.exports = Like;
