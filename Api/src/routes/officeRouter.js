const express = require('express');
const bodyParser = require('body-parser');

var officeRouter = express.Router();

officeRouter.use(bodyParser.json('dev'));

officeRouter.route('/')
.get()