const Post = require("../models/Post");
const fs = require("fs");

exports.createPost = async (post, protocol, host, filename) => {
  const newPost = await JSON.parse(post);
  return Post.create({
    ...newPost,
    imageUrl: `${protocol}://${host}/images/${filename}`,
  });
};

exports.getAllPosts = async () => {
  return Post.findAll();
};

exports.getOnePost = (id) => {
  return Post.findOne({ where: { id } });
};

exports.updatePost = (post, file, protocol, host, body, id) => {
  const postObject = file
    ? {
        ...JSON.parse(post),
        imageUrl: `${protocol}://${host}/images/${file.filename}`,
      }
    : { ...body };
  return Post.upsert({ ...postObject, where: { id } });
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
