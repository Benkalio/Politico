import {
  Express
} from "express";
import fs from 'fs';

const userRouter = express.Router();

userRouter
  .all("/", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
  })