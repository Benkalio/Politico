import express from 'express';
import {
  getParties,
  getParty,
  createParty,
  updateParty,
  deleteParty
} from '../controllers/partyController.js';

const partyRouter = (app) => {
  app.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  app.get('/parties', getParties)
  app.post('/parties', createParty)

  app.get('/parties/:id', getParty)
  app.patch('/parties/:id', updateParty)
  app.delete('/parties/:id', deleteParty)
};

export default partyRouter;
