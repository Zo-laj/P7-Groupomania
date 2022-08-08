const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Post extends Model {}

Post.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
    like: { type: DataTypes.INTEGER, defaultValue: 0 },
    usersLike: { type: DataTypes.JSON },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
