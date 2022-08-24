const express = require('express');
const bodyParser = require('body-parser');

const officeRouter = express.Router();

officeRouter.use(bodyParser.json('dev'));

officeRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200,
    res.setHeader('Content-Type', 'text/plain'),
    next();  
  })
  
  .get('/offices', (req, res, next) => {
    res.send()
  })
  