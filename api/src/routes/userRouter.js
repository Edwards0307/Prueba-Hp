const { Router } = require("express");
const {
  getUsersHandlers,
  getUserHandler,
  createUserHandlers,
} = require("../handlers/usersHandlers");

const userRouter = Router();

userRouter.get("/", getUsersHandlers);
userRouter.get("/:id", getUserHandler)
userRouter.post("/", createUserHandlers );

module.exports = userRouter;
