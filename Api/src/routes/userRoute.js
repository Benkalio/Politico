import express from "express";
import fs from 'fs';

const userRouter = express.Router();

userRouter
  .all("/", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    next();
  })
  .get("/", (req, res, next) => {
    res.send("There are no users");
    next();
  })
  .post("/", (req, res, next) => {
    res.send("")
  })
  .get("/:id", (req, res, next) => {
    
  })

export default userRouter;