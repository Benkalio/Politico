// Leaving this code for future reference on unique ID generation
// import {
//   v4 as uuidv4
// } from 'uuid';

import fs from 'fs';

import data from "../data.json" assert { type: "json" };

let offices = [];

export const getOffices = (req, res) => {
  res.send({
    status: 200,
    data: data.Offices
  });

  // Leaving this for reference on checking object keys
  // console.log(Object.keys(data));
};

export const createOffice = (req, res, err) => {
  const {
    id,
    type,
    name
  } = req.body;

  const newOffice = {
    id,
    type,
    name
  };

  // Leaving this for creating unique office IDs
  // const officeId = uuidv4();

  fs.writeFile('../data.json', JSON.stringify(newOffice), err => {
    if (!err) {
      res.send({
        status: 404,
        message: err
      });
    }
    else {
      return({
        status: 200,
        data: newOffice
      })
    }
  });


// This is commented because we are trying other methods of writing to the JSOn file
  // offices.push(office);
  
  // res.send({
  //   status: 200,
  //   data: office,
  // });
};

export const getOffice = (req, res) => {
  const {
    id
  } = req.params;

  const foundOffice = data.Offices.find((office) => office.id === parseInt(id));

  if (!foundOffice) {
    res.statusCode = 400
    res.send("Office not found.");
  };

  res.send({
    status: 200,
    data: foundOffice
  });
};

export const updateOffice = (req, res, error) => {
  const officeId = req.params.id;
  const office = offices.find((office) => office.id === parseInt(officeId));
  const {
    id,
    type,
    name
  } = req.body;

  if (!office && error) {
    return res.statusCode(400).send("Office does not exist")
  };

  office.id = id || office.id;
  office.type = type || office.type;
  office.name = name || office.name;

  res.send({
    status: 200,
    data: office
  })
};

export const deleteOffice = (req, res, error) => {
  const officeId = req.params.id;
  const office = offices.find((office) => office.id === parseInt(officeId));

  if (!office && error) {
    res.statusCode = 400;
    res.send("Office does not exist");
  };

  const officeIndex = offices.indexOf(office);
  office.splice(officeIndex, 1)

  res.send({
    status: 200,
    message: `Government office with the id ${id} deleted from the database.`,
  });
};