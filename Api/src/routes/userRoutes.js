import express from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    next();
  })
  .get(getUsers)
  .post(createUser);

userRouter.route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

export default userRouter;