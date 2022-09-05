const express = require("express");
const partyRouter = express.Router();

const {
  v4: uuidv4
} = require('uuid');

let parties = [{
  partyName: "People's Democratic Party",
  acronym: "PDP",
  members: "250"
}];

partyRouter
  .all(('/'), (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get(('/'), (req, res, next) => {
    res.send('Sending the registered political parties');
    next();
  })
  .post(('/'), (req, res, next) => {
    let party = req.body;

    const partyWithId = {
      ...party,
      id: partyId
    };

    parties.push(partyWithId);

    res.send(`Party with id ${id} has been added.`)
    next();
  })
  
  .get(('/:id'), (req, res, next) => {
    const {
      id
    } = req.params;
    const foundParty = parties.find((party) => party.id === id);

    res.send(foundParty);

    next();
  })

  .patch('/', (req, res, next) => {

  })

  .delete(('/:id'), (req, res, next) => {
    res.end(`Deleting party with ${id}.`);
    next();
  })

module.exports = partyRouter;












// const express = require('express');

// const {
//   getOffices,
//   createOffice,
//   getOffice,
//   deleteOffice,
//   updateOffice,
// } = require('../controllers/officeController.js');

// const officeRouter = express.Router();


// officeRouter.route('/officeRouter')

// officeRouter
//   .get("/", getOffices)

//   .post("/", createOffice)

//   .get('/:id', getOffice)

//   .delete('/:id', deleteOffice)

//   .patch('/:id', updateOffice)

// module.exports = officeRouter;