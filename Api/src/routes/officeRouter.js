const express = require('express');
const bodyParser = require('body-parser');

const officeRouter = express.Router();

const data = use("/API/src/resources/data");

officeRouter.use(bodyParser.json('dev'));

officeRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200,
      res.setHeader('Content-Type', 'application/plain'),
      next(JSON.stringify(data));
    console.log(data);
  })

  .get('/offices', (req, res) => {
    res.send()
  })

  .post('/offices', (req, res) => {
    res.send()
  })

  .put('offices', (req, res) => {
    res.statusCode = 403;
    res.end('Action not permitted.')
  })

  .delete('offices', (req, res) => {
    res.statusCode = 403;
    res.end('Action not permitted.')
  })