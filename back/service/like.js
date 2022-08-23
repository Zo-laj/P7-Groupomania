const Like = require("../models/Like");
const Post = require("../models/Post");
const User = require("../models/User");

Like.belongsTo(User);
Like.belongsTo(Post);

exports.likePost = async (userId, like, postId) => {
  const likeObject = await Like.findOne({
    where: { PostId: postId, UserId: userId },
  });
  console.log(likeObject);

  if (like === -1 && likeObject) {
    return Like.destroy({ where: { id: likeObject.id } });
  } else if (like === 1 && !likeObject) {
    return Like.create({
      UserId: userId,
      PostId: postId,
      likeStatus: true,
    });
  }
};
