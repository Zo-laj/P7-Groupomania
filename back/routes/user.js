const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/auth/signup", userCtrl.signup);
router.post("/auth/login", userCtrl.login);
router.get("/admin/users", auth, userCtrl.getAllUsers);
router.delete("/admin/users/:id", auth, userCtrl.deleteUser);

module.exports = router;
