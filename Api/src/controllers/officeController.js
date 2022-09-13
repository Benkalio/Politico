import {
  v4 as uuidv4
} from 'uuid';
import express from 'express';

let offices = [{
  post: "governor",
  term: "4 years"
}];

import dataFile from "../data.json";

export const getOffices = async (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.parse(JSON.stringify(dataFile)));
  next();
};

export const createOffice = (req, res, next) => {
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
};

export const getOffice = (req, res, next) => {
  const {
    id
  } = req.params;

  const foundOffice = offices.find((office) => office.id === id);

  res.send(foundOffice);

  next();
};

export const deleteOffice = (req, res, next) => {
  const {
    id
  } = req.params;

  offices = offices.filter((office) => office.id !== id);

  res.send(`Government office with the id ${id} deleted from the database.`);
  next();
};

export const updateOffice = (req, res) => {
  const {
    id
  } = req.params;

  const office = offices.find((office) => office.id === id);
  if (post) {
    office.post = post;
  }
  if (term) {
    office.term = term;
  }

  res.send(`Office with the id ${id} has been updated.`)
};

// export default {
//   createOffice,
//   getOffice,
//   getOffices,
//   deleteOffice,
//   updateOffice
// }

// module.exports = {
//   createOffice,
//   getOffice,
//   getOffices,
//   updateOffice,
//   deleteOffice
// }






// for users
// const {
//   firstName,
//   lastName,
//   age
// } = req.body;
// if (firstName) {
//   user.firstName = firstName;
// }

// if (lastName) {
//   user.lastName = lastName;
// }

// if (age) {
//   user.age = age;
// }