const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");
const Like = require("./Like");

class Post extends Model {}

Post.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

Post.hasMany(Like, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = Post;
