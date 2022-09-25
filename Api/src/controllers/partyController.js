// import {
//   v4 as uuidv4
// } from 'uuid';

import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

import data from "../data.json" assert { type: "json" };;

// let parties = data.Parties;

let parties = [{
  id: "",
  name: "",
  hqAddress: "",
  logoUrl: ""
}];

// const dataFile = (__dirname + '../data.json');

export const getParties = (req, res) => {
  res.send(data.Parties);
};

export const createParty = (req, res) => {
  let party = req.body;

  data.Parties.push(party);

  res.send({
    status: 200,
    data: party,
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
    res.statusCode = 400
    res.send("There is no record of this party.");
  };

  party.name = req.body.name || party.name;
  party.hqAddress = req.body.hqAddress || party.hq.hqAddress;

  res.send({
    status: 200,
    data: party
  });
};

export const deleteParty = (req, res, error) => {
  const partyId = req.params.id;
  let party = parties.find((party) => party.id === parseInt(partyId));

  if (!party && error) {
    return res.statusCode(400).send("Party not found.");
  };

  const partyIndex = parties.indexOf(party);
  party.splice(partyIndex, 1)

  res.send({
    status: 200,
    data: party,
  });
};