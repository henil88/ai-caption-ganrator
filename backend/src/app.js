const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "ai-caption-generator-free.netlify.app",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
module.exports = app;
