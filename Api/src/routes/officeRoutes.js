import express from 'express';

import {
  getOffices,
  createOffice,
  getOffice,
  deleteOffice,
  updateOffice,
} from '../controllers/officeController.js';

const officeRouter = express.Router();

// officeRouter.route('/officeRouter')

officeRouter
  .all('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get("/", getOffices)

  .post("/", createOffice)

  .get('/:id', getOffice)

  .delete('/:id', deleteOffice)

  .patch('/:id', updateOffice)

export default officeRouter;