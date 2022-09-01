import {
  Express
} from "express";
import bodyParser from "body-parser";

const partyRouter = express.Router();

partyRouter.route('/partyRouter')
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
    res.end('Cannot post office ' + req.params.partyId)
  })
  .put((req, res, params) => {
    res.write('Updating: ' + req.params.officeId + '\n');
    res.end('Political party with id: ' +
      req.body.name + 'with details: ' + req.body.description);
  })
  .delete((req, res, params) => {
    res.end('Deleting political party with id: ' + req.params.officeId);
  });

partyRouter.route('/party/:partyId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res, params) => {
    res.send('Party with id ' + req.body.params);
    next();
  })
  .post((req, res) => {
    let newParty = req.body.params;

    console.log(newParty);
    res.send(newParty);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send('Updating party not allowed');
  })
  .delete((req, res, next) => {
    res.send('Deleting the political party');
    next();
  })

modules.exports = partyRouter;