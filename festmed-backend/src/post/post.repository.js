const prisma = require("../db");

const findPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

module.exports = {
  findPosts,
};
