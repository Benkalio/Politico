const express = require('express');
const {
  v4: uuidv4
} = require('uuid');

const officeRouter = express.Router();

const offices = [];
// officeRouter.route('/officeRouter')

officeRouter
  .get("/", (req, res) => {
    res.send(offices);
  })
  .post("/", (req, res) => {
    let office = req.body;

    // For creating unique office IDs
    const officeId = uuidv4();

    const officeWithId = {
      ...office,
      id: officeId
    };

    offices.push(officeWithId);

    res.send(`Office with the post ${office.post} was added to the database`);
  })

  

module.exports = officeRouter;