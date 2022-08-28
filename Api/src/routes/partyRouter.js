import {
  Express
} from "express";
import bodyParser from "body-parser";

const partyRouter = express.Router();

partyRouter.use('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res, next) => {
    res.end('Sending the registered political parties');
  })
  .post((req, res, next) => {
    res.end('Adding Political party : ' + req.body.name + ' with details: ' + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on this directory');
  })
  .delete((req, res, next) => {
    res.end('Deleting all parties.');
  });

partyRouter.route('/')
  .all((req, res, next) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    next();
  })
  .get((req, res, next) => {
    res.end('Sending political party with id: ' + req.body.params + ' to you!');
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('Cannot post office ' + req.params.dishId)
  })
  .put((req, res, params) => {
    res.write('Updating: ' + req.params.officeId + '\n');
    res.end('Political party with id: ' +
      req.body.name + 'with details: ' + req.body.description)
  })
  .delete((req, res, params) => {
    res.end('Deleting political party with id: ' + req.params.officeId)
  });

modules.exports = partyRouter;