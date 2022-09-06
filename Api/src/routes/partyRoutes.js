import express from 'express';
import {
  getParties,
  getParty,
  createParty,
  updateParty,
  deleteParty
} from '../controllers/partyController.js';

const partyRouter = express.Router();

partyRouter
  .all('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get('/', getParties)

  .post('/:id', createParty)

  .get('/:id', getParty)

  .patch('/', updateParty)

  .delete('/:id', deleteParty)

export default partyRouter;












// const express = require('express');

// const {
//   getOffices,
//   createOffice,
//   getOffice,
//   deleteOffice,
//   updateOffice,
// } = require('../controllers/officeController.js');

// const officeRouter = express.Router();


// officeRouter.route('/officeRouter')

// officeRouter
//   .get("/", getOffices)

//   .post("/", createOffice)

//   .get('/:id', getOffice)

//   .delete('/:id', deleteOffice)

//   .patch('/:id', updateOffice)

// module.exports = officeRouter;