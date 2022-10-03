/* eslint-disable consistent-return */
// Leaving this code for future reference on unique ID generation
// import {
//   v4 as uuidv4
// } from 'uuid';

import data from '../data.json';

const offices = [];

export const getOffices = (req, res) => {
  res.send({
    status: 200,
    data: data.Offices,
  });

  // Leaving this for reference on checking object keys
  // console.log(Object.keys(data));
};

export const createOffice = (req, res, err) => {
  const {
    id,
    type,
    name,
  } = req.body;

  const newOffice = {
    id,
    type,
    name,
  };

  if (!err) {
    res.send({
      status: 404,
      message: err,
    });
  }

  offices.push(newOffice);

  res.send({
    status: 200,
    data: newOffice,
  });
};

export const getOffice = (req, res) => {
  const {
    id,
  } = req.params;

  const foundOffice = data.Offices.find((office) => office.id === parseInt(id, 10));

  if (!foundOffice) {
    res.statusCode = 400;
    res.send('Office not found.');
  }

  res.send({
    status: 200,
    data: foundOffice,
  });
};

export const updateOffice = (req, res, error) => {
  const officeId = req.params.id;
  const updatedOffice = data.Offices.find((office) => office.id === parseInt(officeId, 10));
  const {
    id,
    type,
    name,
  } = req.body;

  if (!updatedOffice && error) {
    res.statusCode(400);
    res.send('Office does not exist');
  }

  updatedOffice.id = id || updatedOffice.id;
  updatedOffice.type = type || updatedOffice.type;
  updatedOffice.name = name || updatedOffice.name;

  res.send({
    status: 200,
    data: updatedOffice,
  });
};

export const deleteOffice = (req, res, error) => {
  const officeId = req.params.id;
  const deletedOffice = data.Offices.find((office) => office.id === parseInt(officeId, 10));

  if (!deletedOffice && error) {
    res.statusCode = 400;
    res.send('Office does not exist');
  }

  const officeIndex = offices.indexOf(deletedOffice);
  deletedOffice.splice(officeIndex, 1);

  res.send({
    status: 200,
    data: deletedOffice,
  });
};
