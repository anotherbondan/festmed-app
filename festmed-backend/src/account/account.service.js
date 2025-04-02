const {
  findAccounts,
  findAccountById,
  createAccount,
  deleteAccount,
  findAccountPosts,
  createPost,
  deletePost,
  findPostById,
} = require("./account.repository");

const getAllAccounts = async () => {
  accounts = await findAccounts();

  return accounts;
};

const getAccountById = async (accountId) => {
  if (isNaN(accountId)) {
    throw Error("Invalid account id");
  }

  const account = await findAccountById(accountId);

  if (!account) {
    throw Error("Account not found");
  }

  return account;
};

const createNewAccount = async (username, profilePhoto) => {
  if (isNaN(username)) {
    throw Error("Invalid username");
  }

  const newAccount = await createAccount(username, profilePhoto);

  return newAccount;
};

const deleteAccountById = async (accountId) => {
  await getAccountById(accountId);

  await deleteAccount(accountId);
};

const createNewPost = async (accountId, content) => {
  const newPost = await createPost(accountId, content);

  return newPost;
};

const getPostById = async (postId, accountId) => {
  await getAccountById(accountId);

  const post = await findPostById(postId);

  if (!post) {
    throw Error("Post not found");
  }

  return post;
};

const deletePostById = async (postId, accountId) => {
  await getPostById(postId, accountId);
  await deletePost(postId, accountId);
};

const getAccountPosts = async (accountId) => {
  const accountPosts = await findAccountPosts(accountId);

  return accountPosts;
};
module.exports = {
  getAllAccounts,
  getAccountById,
  createNewAccount,
  deleteAccountById,
  createNewPost,
  getPostById,
  deletePostById,
  getAccountPosts,
};
