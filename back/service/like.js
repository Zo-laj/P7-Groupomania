const Like = require("../models/Like");

exports.likePost = async (userId, like, postId) => {
  const likeObject = await Like.findOne({ where: { postId } });

  if (like === -1 && likeObject) {
    return Like.destroy({ where: { id: likeObject.id } });
  } else if (like === 1) {
    return Like.create({
      userId,
      postId,
    });
  }
};
