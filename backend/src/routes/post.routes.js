const express = require("express");
const authMiddleware = require("../middlewares/auth.middlewares");
const postController = require("../controller/post.controller");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });
router.post("/", authMiddleware, upload.single("image"), postController);

module.exports = router;
