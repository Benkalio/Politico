import express from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/userController";

const userRouter = express.Router();

userRouter
  .all("/", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    next();
  })
  .get("/", getUsers)

  .post("/", createUser)

  .get("/:id", getUser)

  .patch("/:id", updateUser)

  .delete("/:id", deleteUser)

export default userRouter;