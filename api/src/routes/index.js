const { Router } = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");

const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/post", postRouter);

module.exports = mainRouter;
