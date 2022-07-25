const Post = require("../models/Post");

exports.likePost = async (userId, like, id) => {
  // const updatePost = await Post.findOne({ where: { id } });

  if (like === 1) {
    // updatePost.usersLike.push(userId);
    return await Post.increment({ like: +1 }, { where: { id } });
    // return await Post.upsert(updatePost, { where: { id } });
  } else if (like === -1) {
    // updatePost.usersLike.pull(userId);
    return Post.increment({ like: -1 }, { where: { id } });
    // return await Post.upsert(updatePost, { where: { id } });
  }
};
