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

// exports.updatePost = (post, file, req, id) => {
//   const postObject = file
//     ? {
//         ...JSON.parse(post),
//         imageUrl: `${req.protocol}://${req.get("host")}/images/${
//           file.filename
//         }`,
//       }
//     : { ...req.body };
//   return Post.updateOne({ _id: id }, { ...postObject, _id: id });
// };

exports.deletePost = async (id) => {
  // const deletedPost = await Post.findOne({ id: id });

  // const filename = await deletedPost.imageUrl.split("/images/")[1];

  // fs.unlink(`images/${filename}`, () => {
  //   Post.deleteOne({ _id: id });
  // });

  return await Post.destroy({
    where: { id },
  });
};
