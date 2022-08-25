const express = require('express');

const politicalParties = express.Router();

const data = use("/API/src/resources/data");

politicalParties.route('/')
  .all((req, res) => {
    res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  })

  .get()
