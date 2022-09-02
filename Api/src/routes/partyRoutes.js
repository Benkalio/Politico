const express = require("express");
const partyRouter = express.Router();

partyRouter.use('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res, next) => {
    res.send('Sending the registered political parties');
    next();
  })
  .post((req, res, next) => {
    res.send('Adding Political party : ' + req.body.name + ' with details: ' + req.body.description);
    next();
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.send('Put operation not supported on this directory');
    next();
  })
  .delete((req, res, next) => {
    res.end('Deleting all parties.');
    next();
  });

module.exports = partyRouter;