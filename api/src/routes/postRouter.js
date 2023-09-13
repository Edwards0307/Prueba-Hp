const { Router } = require("express");

const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.status(200).send("Estoy en PostUser");
});

module.exports = postRouter;
