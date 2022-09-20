import {
  v4 as uuidv4
} from 'uuid';

import data from "../data.json";

let party = [{
  id: uuidv4(),
  name: "People's Democratic Party",
  hqAddress: "Abuja",
  logoUrl: ""
}];

export const getParties = (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.parse(JSON.stringify(data)));
  next();
}

export const createParty = (req, res, next) => {
  let party = req.body;

  const partyId = {
    ...party,
    id: uuidv4()
  };

  parties.push(partyId);

  res.send(`Party with id ${id} has been added.`)
  next();
}

export const getParty = (req, res, next) => {
  const {
    id
  } = req.params;
  const foundParty = parties.find((party) => party.id === id);

  res.send(foundParty);

  next();
}

export const updateParty = (req, res, next) => {
  const {
    id
  } = req.params;

  let party = parties.find((party) => party.id === id);

  if (!party) return res.statusCode(400).send("Party not found.");

  party.name = req.body.name || party.name;
  party.hqAddress = req.body.hqAddress || party.hq.hqAddress;

  res.send(`Party with id ${id} has been updated.`);
  next();
}

export const deleteParty = (req, res, next) => {
  const partyId = req.params.id;
  let party = parties.find((party) => party.id === parseInt(partyId));

  if (!party) return res.statusCode(400).send("Party not found.");

  const partyIndex = parties.indexOf(party);
  party.splice(partyIndex, 1)

  res.end(`Deleted party with ${partyId}.`);
  next();
};