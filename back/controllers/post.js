const service = require("../service/post");

exports.createPost = (req, res) => {
  try {
    service
      .createPost(
        req.body.post,
        req.protocol,
        req.get("host"),
        req.file.filename
      )
      .then(() =>
        res.status(201).json({ message: "Post successfully created" })
      )
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};

exports.getAllPosts = (req, res) => {
  try {
    service
      .getAllPosts()
      .then((posts) => res.status(200).json(posts))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};

exports.getOnePost = (req, res) => {
  try {
    service
      .getOnePost(req.params.id)
      .then((post) => res.status(200).json(post))
      .catch((error) => res.status(404).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};

exports.updatePost = (req, res) => {
  try {
    service
      .updatePost(
        req.body.post,
        req.file,
        req.protocol,
        req.get("host"),
        req.params.id
      )
      .then(() => res.status(200).json({ message: "Object updated !" }))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};

exports.deletePost = (req, res) => {
  try {
    service
      .deletePost(req.params.id)
      .then(() => res.status(200).json({ message: "Object deleted!" }))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};
