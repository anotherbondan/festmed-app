const prisma = require("../db");

const findAccounts = async () => {
  accounts = await prisma.account.findMany();

  return accounts;
};

const findAccountById = async (accountId) => {
  account = await prisma.account.findUnique({
    where: {
      id: accountId,
    },
  });

  return account;
};

const createAccount = async (username, profilePhoto) => {
  const newAccount = await prisma.account.create({
    data: {
      username,
      profilePhoto,
    },
  });

  return newAccount;
};

const deleteAccount = async (accountId) => {
  await prisma.account.delete({
    where: {
      id: accountId,
    },
  });
};

const findAccountPosts = async (accountId) => {
  const accountPosts = await prisma.post.findMany({
    where: {
      userId: accountId,
    },
  });

  return accountPosts;
};

const createPost = async (accountId, content) => {
  const newPost = await prisma.post.create({
    data: {
      userId: accountId,
      content,
    },
  });

  return newPost;
};

const deletePost = async (postId) => {
  await prisma.post.delete({
    where: {
      id: postId,
    },
  });
};

const findPostById = async (postId) => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
};

module.exports = {
  findAccounts,
  findAccountById,
  createAccount,
  deleteAccount,
  findAccountPosts,
  createPost,
  deletePost,
  findPostById,
};
