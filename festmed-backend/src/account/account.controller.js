const express = require("express");
const {
  getAllAccounts,
  getAccountById,
  createNewAccount,
  deleteAccountById,
  getPostById,
  createNewPost,
  deletePostById,
  getAccountPosts,
} = require("./account.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const accounts = await getAllAccounts();

  res.send(accounts);
});

router.get("/:id", async (req, res) => {
  const accountId = Number(req.params.id);
  try {
    const account = await getAccountById(accountId);
    res.send(account);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newAccountData = req.body;
    const account = await createNewAccount(
      newAccountData.username,
      newAccountData.profilePhoto
    );
    res.send({ data: account, message: "create account success" });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = Number(req.params.id);

  try {
    await deleteAccountById(accountId);
    res.send("delete account success");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id/posts", async (req, res) => {
  const accountId = Number(req.params.id);
  const accountPosts = await getAccountPosts(accountId);

  res.send(accountPosts);
});

router.get("/:id/posts/:postId", async (req, res) => {
  const accountId = Number(req.params.id);
  const postId = req.params.postId;

  const posts = await getPostById(postId, accountId);

  res.send({ data: posts, message: "all posts" });
});

router.post("/:id/posts", async (req, res) => {
  const accountId = Number(req.params.id);
  const newPostData = req.body;

  const newPost = await createNewPost(accountId, newPostData.content);

  res.send({ data: newPost, message: "create post success" });
});

router.delete("/:id/posts/:postId", async (req, res) => {
  const accountId = Number(req.params.id);
  const postId = req.params.postId;

  await deletePostById(postId, accountId);

  res.send("post successfully deleted");
});

module.exports = router;
