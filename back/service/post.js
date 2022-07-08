const Post = require("../models/Post");
// const fs = require("fs");

exports.createPost = async (post) => {
  const postObject = await JSON.parse(post);

  return (newPost = await Post.create({
    ...postObject,
    // imageUrl: `${req.protocol}://${req.get("host")}/images/${
    //   req.file.filename
    // }`,
  }));
};

exports.getAllPosts = async () => {
  await Post.sync();
  return Post.findAll();
};

// exports.getOnePost = (id) => {
//   return Post.findOne({ _id: id });
// };

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

// exports.deletePost = async (id) => {
//   const deletedPost = await Post.findOne({ _id: id });

//   const filename = await deletedPost.imageUrl.split("/images/")[1];

//   fs.unlink(`images/${filename}`, () => {
//     Post.deleteOne({ _id: id });
//   });

//   return Post.deleteOne({ _id: id });
// };
