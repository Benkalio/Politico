const express = require('express');
const bodyParser = require('body-parser');

const officeRouter = express.Router();

officeRouter.use(bodyParser.json('dev'));

officeRouter.route('/officeRouter')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res, next) => {
    res.send('Sending you the recent government offices...');
  })
  .post((req, res, next) => {
    res.send('Will add the office: ' + req.body.name +
      ' with details: ' + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.send('Put operation not supported on /offices');
    next();
  })
  .delete((req, res, next) => {
    res.send('Deleting all the government offices!');
  });

officeRouter.route('/officeRoute/:officeId')
  .all((req, res, next) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    next();
  })
  .get((req, res, next) => {
    res.send('Sending government office with id: ' + req.body.params +
      ' to you!');
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.send('Cannot post office ' + req.params.officeId)
  })
  .put((req, res, params) => {
    res.write('Updating: ' + req.params.officeId + '\n');
    res.send('Posting office with id: ' +
      req.body.name + 'with details: ' + req.body.description);
    next();
  })
  .delete((req, res, params) => {
    res.send('Deleting offices with id: ' + req.params.officeId);
    next();
  })

module.exports = officeRouter;