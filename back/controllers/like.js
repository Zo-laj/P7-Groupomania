const likeService = require("../service/like");

exports.likePost = (req, res) => {
  try {
    likeService
      .likePost(req.body.userId, req.body.like, req.params.id)
      .then(() => {
        res.status(201).json({ message: "Like / unlike succesfull" });
      })
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};
