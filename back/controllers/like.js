const likeService = require("../service/like");

exports.likePost = (req, res) => {
  try {
    likeService
      .likePost(req.body.userId, req.body.like, req.body.postId)
      .then(() => {
        if (req.body.like === 1) {
          res.status(201).json({ message: "Like succesfull" });
        } else if (req.body.like === -1) {
          res.status(201).json({ message: "Like canceled" });
        }
      })
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};
