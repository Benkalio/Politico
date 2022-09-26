// Leaving this here for future reference to create dynamic id 
// import {
//   v4 as uuidv4
// } from 'uuid';

import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

import data from "../data.json" assert { type: "json" };;

let parties = [{
  id: "",
  name: "",
  hqAddress: "",
  logoUrl: ""
}];

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
  const { id, name, hqAddress, logoUrl } = req.body;

  let party = parties.find((party) => party.id === parseInt(partyId));

  if (!party && error) {
    res.statusCode = 400
    res.send("There is no record of this party.");
  };

  party.id = id || party.id;
  party.name = name || party.name;
  party.hqAddress = hqAddress || party.hqAddress;
  party.logoUrl = logoUrl || party.logoUrl;

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