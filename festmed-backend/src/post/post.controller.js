const express = require("express");
const { getAllPosts } = require("./post.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.send(posts);
});

module.exports = router;
