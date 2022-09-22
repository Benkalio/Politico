import express from 'express';

import {
  getOffices,
  createOffice,
  getOffice,
  deleteOffice,
  updateOffice,
} from '../controllers/officeController.js';

const officeRouter = (app) => {
  app.get('/offices', getOffices)
  app.post('/offices', createOffice)
  app.get('/offices/:id', getOffice)
  app.patch('/offices/:id', updateOffice)
  app.delete('/office/:id', deleteOffice)
}

export default officeRouter;


// const officeRouter = express.Router();

// officeRouter.route("/")
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     next();
//   })
//   .get(getOffices)

//   .post(createOffice);

// officeRouter.route("/:id")

//   .get(getOffice)

//   .delete(deleteOffice)

//   .patch(updateOffice)
