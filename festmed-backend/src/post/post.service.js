const { findPosts } = require("./post.repository");

const getAllPosts = async () => {
  const posts = findPosts();

  return posts;
};

module.exports = {
  getAllPosts,
};
