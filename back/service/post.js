const Post = require("../models/Post");
const fs = require("fs");
const User = require("../models/User");
const Like = require("../models/Like");

Post.belongsTo(User);

exports.createPost = async (post, protocol, host, filename) => {
  const newPost = await JSON.parse(post);
  const user = await User.findOne({ where: { id: newPost.userId } });
  return Post.create({
    ...newPost,
    imageUrl: `${protocol}://${host}/images/${filename}`,
    UserId: user.id,
  });
};

exports.getAllPosts = () => {
  return Post.findAll({
    include: [{ model: User, attributes: ["userName"] }, { model: Like }],
  });
};

exports.getOnePost = (id) => {
  return Post.findOne({
    where: { id },
    include: [{ model: User, attributes: ["userName"] }, { model: Like }],
  });
};

exports.updatePost = (post, file, protocol, host, id) => {
  const postObject = file
    ? {
        ...JSON.parse(post),
        imageUrl: `${protocol}://${host}/images/${file.filename}`,
      }
    : { ...JSON.parse(post) };
  return Post.update({ ...postObject }, { where: { id } });
};

exports.deletePost = async (id) => {
  const deletedPost = await Post.findOne({ where: { id } });

  const filename = await deletedPost.imageUrl.split("/images/")[1];

  fs.unlink(`images/${filename}`, () => {
    Post.destroy({ where: { id } });
  });

  return await Post.destroy({
    where: { id },
  });
};
