const userService = require("../service/user");

exports.signup = (req, res) => {
  try {
    userService
      .signup(req.body.email, req.body.userName, req.body.password)
      .then(() =>
        res.status(201).json({ message: "User successfully created !" })
      )
      .catch((error) =>
        res.status(400).json({
          error,
          errorMsg:
            "Email ou nom d'utilisateur déjà utilisé pour un autre compte",
        })
      );
  } catch {
    res.status(500).json({ error });
  }
};

exports.login = (req, res) => {
  try {
    userService
      .login(req.body.email, req.body.password)
      .then((user) => {
        if (!user.validPassword) {
          return res.status(401).json({ error: "Mot de passe incorrect !" });
        }
        res.status(200).json({
          token: userService.createJwt(user.validUser.id, user.validUser.role),
        });
      })
      .catch((error) => res.status(500).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};

exports.getAllUsers = (req, res) => {
  try {
    userService
      .getAllUsers()
      .then((users) => res.status(200).json(users))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};

exports.deleteUser = (req, res) => {
  try {
    userService
      .deleteUser(req.params.id)
      .then(() => res.status(200).json({ message: "User deleted!" }))
      .catch((error) => res.status(400).json({ error }));
  } catch {
    res.status(500).json({ error });
  }
};
