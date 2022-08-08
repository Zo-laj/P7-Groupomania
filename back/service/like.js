const Like = require("../models/Like");

exports.likePost = async (userId, like, postId) => {
  return Like.findOne({
    where: { postId, userId },
  }).then((likeObject) => {
    console.log(likeObject);
    if (like === -1 && likeObject) {
      return Like.destroy({ where: { id: likeObject.id } });
    } else if (like === 1) {
      return Like.create({
        userId,
        postId,
      });
    }
  });
};
