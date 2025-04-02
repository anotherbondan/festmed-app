const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

const accountController = require("./account/account.controller");
const postController = require("./post/post.controller");

app.use("/accounts", accountController);
app.use("/posts", postController);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
