const express = require('express');

const {
  getOffices,
  createOffice,
  getOffice,
  deleteOffice,
  updateOffice,
} = require('../controllers/officeController.js');

const officeRouter = express.Router();


// officeRouter.route('/officeRouter')

officeRouter
  .get("/", getOffices)

  .post("/", createOffice)

  .get('/:id', getOffice)

  .delete('/:id', deleteOffice)

  .patch('/:id', updateOffice)

module.exports = officeRouter;