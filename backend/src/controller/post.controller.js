const ganrateCaption = require("../service/ai.service");
const uploadFile = require("../service/storage.service");
const postModel = require("../models/post.model");
const { v4: uuidv4 } = require("uuid");
async function postController(req, res) {
  const image = req.file;
  const { lang, tone } = req.body;
  if (!image) {
    return res.status(400).json({ message: "Image file is required" });
  }
  const caption = await ganrateCaption(image, lang, tone);
  const imageFile = await uploadFile(image.buffer, `${uuidv4()}`);
  const post = await postModel.create({
    image: imageFile.url,
    caption: caption,
    user: req.user._id,
    lang: lang,
    tone: tone,
  });
  res.status(201).json({
    message: "caption ganrated",
    post,
  });
}

module.exports = postController;
