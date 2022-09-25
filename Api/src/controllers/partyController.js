// import {
//   v4 as uuidv4
// } from 'uuid';

import data from "../data.json" assert { type: "json" };;

let parties = data.Parties;

export const getParties = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(data.Parties);
};

export const createParty = (req, res) => {
  let party = req.body;

  const partyWithId = {
    ...party,
  };

  parties.push(partyWithId);

  res.send({
    status: 200,
    data: partyWithId,
  });
};

export const getParty = (req, res) => {
  const partyId = req.params.id;
  const party = parties.find((party) => party.id === parseInt(partyId));

  if (!party) {
    return "Party does not exit";
  };

  res.send({
    status: 200,
    data: party
  });
};

export const updateParty = (req, res, error) => {
  const partyId = req.params;

  let party = parties.find((party) => party.id === parseInt(partyId));

  if (!party && error) {
    return res.statusCode(400).send("Party not found.");
  };

  party.name = req.body.name || party.name;
  party.hqAddress = req.body.hqAddress || party.hq.hqAddress;

  res.send(`Party with id ${id} has been updated.`);
};

export const deleteParty = (req, res, error) => {
  const partyId = req.params.id;
  let party = Parties.find((party) => party.id === parseInt(partyId));

  if (!party && error) {
    return res.statusCode(400).send("Party not found.");
  };

  const partyIndex = parties.indexOf(party);
  party.splice(partyIndex, 1)

  res.send(`Deleted party with ${partyId}.`);
};