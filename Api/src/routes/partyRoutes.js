import express from 'express';
import {
  getParties,
  getParty,
  createParty,
  updateParty,
  deleteParty
} from '../controllers/partyController.js';
import officeRouter from './officeRoutes.js';

const partyRouter = express.Router();

partyRouter.route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get(getParties)

  .post(createParty)

partyRouter.route("/:id")
  .get(getParty)

  .patch(updateParty)

  .delete(deleteParty)

export default partyRouter;