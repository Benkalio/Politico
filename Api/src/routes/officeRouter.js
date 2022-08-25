const express = require('express');
const bodyParser = require('body-parser');

const officeRouter = express.Router();

const data = use("/API/src/resources/data");

officeRouter.use(bodyParser.json('dev'));

officeRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200,
      res.setHeader('Content-Type', 'text/plain'),
      next(JSON.stringify(data));
    console.log(data);
  })

  .get('/offices', (req, res) => {
    res.send()
  })

  .post('/office', (req, res) => {
    req.body.
  })