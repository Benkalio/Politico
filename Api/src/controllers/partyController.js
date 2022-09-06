import {
  v4 as uuidv4
} from 'uuid';

let party = [{

}];

export const getParties = (req, res, next) => {
  res.send('Sending the registered political parties');
  next();
}

export const createParty = (req, res, next) => {
  let party = req.body;

  const partyWithId = {
    ...party,
    id: partyId
  };

  parties.push(partyWithId);

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

  if (partyName) party.partyName = partyName;
  if (acronym) party.acronym = acronym;

  res.send(`Party with id ${id} has been updated.`);

}

export const deleteParty = (req, res, next) => {
  res.end(`Deleting party with ${id}.`);
  next();
}

// export default {
//   getParties,
//   getParty,
//   createParty,
//   updateParty,
//   deleteParty
// };