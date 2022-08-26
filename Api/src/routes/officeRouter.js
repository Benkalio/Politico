const express = require('express');
const bodyParser = require('body-parser');

const officeRouter = express.Router();

officeRouter.use(bodyParser.json('dev'));

officeRouter.route('/')
  .get()

modules.exports = officeRouter;