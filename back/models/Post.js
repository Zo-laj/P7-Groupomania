const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Post = sequelize.define(
  "posts",
  {
    userId: { type: DataTypes.NUMBER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    createdDate: { type: DataTypes.DATE },
    author: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
    like: { type: DataTypes.NUMBER },
    usersLike: { type: [DataTypes.STRING] },
  },
  {
    freezeTableName: true,
  }
);

module.exports = sequelize.model("posts", Post);
