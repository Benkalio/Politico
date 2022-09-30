/* eslint-disable consistent-return */
// Leaving this here for future reference to create dynamic id
// import {
//   v4 as uuidv4
// } from 'uuid';

import data from '../data.json';

const parties = [{
  id: 2,
  name: 'APGA',
  hqAddress: 'Abuja',
  logoUrl: 'logo.img',
}];

export const getParties = (req, res) => {
  res.send({
    status: 200,
    data: data.Parties,
  });
};

export const createParty = (req, res) => {
  const party = req.body;

  data.Parties.push(party);

  res.send({
    status: 200,
    data: party,
  });
};

export const getParty = (req, res) => {
  const partyId = req.params.id;
  const singleParty = data.Parties.find((party) => party.id === parseInt(partyId, 10));

  if (!singleParty) {
    return 'Party does not exit';
  }

  res.send({
    status: 200,
    data: singleParty,
  });
};

export const updateParty = (req, res, error) => {
  const partyId = req.params;
  const {
    id,
    name,
    hqAddress,
    logoUrl,
  } = req.body;

  const updatedParty = data.parties.find((party) => party.id === parseInt(partyId, 10));

  if (!updatedParty && error) {
    res.statusCode = 400;
    res.send('There is no record of this party.');
  }

  updatedParty.id = id || updatedParty.id;
  updatedParty.name = name || updatedParty.name;
  updatedParty.hqAddress = hqAddress || updatedParty.hqAddress;
  updatedParty.logoUrl = logoUrl || updatedParty.logoUrl;

  res.send({
    status: 200,
    data: updatedParty,
  });
};

export const deleteParty = (req, res, error) => {
  const partyId = req.params.id;
  const deletedParty = data.Parties.find((party) => party.id === parseInt(partyId, 10));

  if (!deletedParty && error) {
    res.statusCode(400);
    res.send('Party not found.');
  }

  const partyIndex = parties.indexOf(partyId);
  partyId.splice(partyIndex, 1);

  res.send({
    status: 200,
    data: deletedParty,
  });
};
