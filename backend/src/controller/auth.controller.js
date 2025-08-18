const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, password } = req.body;

  const isUserExist = await userModel.findOne({ username });
  if (isUserExist) {
    return res.status(400).json({
      message: "username alredy exist",
    });
  }

  //   const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    username,
    password: await bcrypt.hash(String(password), 10),
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  res.cookie("token", token, {
    httpOnly: true, // so JS can't access it
    secure: true, // required for HTTPS
    sameSite: "None", // for cross-site cookies (frontend & backend on different domains)
  });

  res.status(201).json({
    message: "User registration success",
    newUser,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({ username });

  if (!isUser) {
    return res.status(400).json({
      message: "User Not fount",
    });
  }

  const isPassword = await bcrypt.compare(String(password), isUser.password);

  if (!isPassword) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET);
  res.cookie("token", token, {
    httpOnly: true, // so JS can't access it
    secure: true, // required for HTTPS
    sameSite: "None", // for cross-site cookies (frontend & backend on different domains)
  });

  res.status(200).json({
    message: "User login succes",
  });
}
module.exports = {
  registerController,
  loginController,
};
