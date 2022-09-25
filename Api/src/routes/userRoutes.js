import express from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const userRouter = (app) => {
  app.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    next();
  });
  app.get('/users', getUsers);
  app.post('/users', createUser);

  app.get('/users/:id', getUser);
  app.patch('/users/:id', updateUser);
  app.delete('/users/:id', deleteUser);
  
};

export default userRouter;