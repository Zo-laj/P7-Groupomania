const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Post = sequelize.define("post", {
  userId: { type: String, required: true },
  title: { type: String, required: true },
  postDate: { type: Date },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
});

module.exports = sequelize.model("post", Post);
