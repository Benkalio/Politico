const express = require('express');
const {
  v4: uuidv4
} = require('uuid');

const officeRouter = express.Router();

let offices = [{
  post: "governor",
  term: "4 years"
}];
// officeRouter.route('/officeRouter')

officeRouter
  .get("/", (req, res, next) => {
    res.send(offices);
    next();
  })
  .post("/", (req, res, next) => {
    let office = req.body;

    // For creating unique office IDs
    const officeId = uuidv4();

    const officeWithId = {
      ...office,
      id: officeId
    };

    offices.push(officeWithId);

    res.send(`Office with the post ${office.post} was added to the database`);
    next();
  })

  .get('/:id', (req, res, next) => {
    const {
      id
    } = req.params;

    const foundOffice = office.find((office) => office.id === id);

    res.send(foundOffice);

    next();
  })
  .delete('/:id', (req, res) => {
    const {
      id
    } = req.params;

    offices = offices.filter((office) => office.id !== id);

    res.send(`Government office with the id ${id} deleted from the database.`);
  })
  .patch('/:id', (req, res) => {
    const {
      id
    } = req.params;

    const office = office.find((office) => office.id === id);
    if (post) {
      office.post = post;
    }
    if (term) {
      office.term = term;
    }

    res.send(`Office with the id ${id} has been updated.`)
  })

module.exports = officeRouter;