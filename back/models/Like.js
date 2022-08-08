const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Like extends Model {
  // static associate(models) {
  //   models.Like.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  //   models.Like.belongsTo(models.Post, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // }
}

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
