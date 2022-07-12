const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Post extends Model {}

Post.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    createdDate: { type: DataTypes.DATE },
    author: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
    like: { type: DataTypes.NUMBER, defaultValue: 0 },
    usersLike: { type: [DataTypes.STRING] },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
