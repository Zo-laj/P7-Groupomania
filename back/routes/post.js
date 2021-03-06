const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, postCtrl.createPost);
router.get("/", postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", multer, postCtrl.updatePost);
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;
