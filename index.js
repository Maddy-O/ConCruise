const express = require("express");

const connect = require("./configs/database");

const userController = require("./controllers/user.controller");

const cors = require("cors");

const PORT = process.env.PORT || 5500;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userController);

app.listen(PORT, async function () {
  try {
    await connect();
    console.log(`listening ${PORT}`);
  } catch (e) {
    console.log(e.message);
  }
});
