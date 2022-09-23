// import {
//   v4 as uuidv4
// } from 'uuid';

import data from "../data.json" assert { type: "json" };

let offices = [{
  
}];

export const getOffices = async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send((data.Offices));

  // Leaving this for reference 
  // console.log(Object.keys(data));
};

export const createOffice = (req, res, err) => {
  let office = req.body;

  // For creating unique office IDs
  // const officeId = uuidv4();

  const officeWithId = {
    ...office
  };

  offices.push(officeWithId);

  res.send({
    status: 200,
    data: officeWithId,
  });
};

export const getOffice = (req, res) => {
  const {
    id
  } = req.params;

  const foundOffice = data.Offices.find((office) => office.id === id);

  if (!foundOffice) {
    res.statusCode = 400
    res.send("Office not found.");
  };

  res.send(foundOffice);
};

export const updateOffice = (req, res, error) => {
  const officeId = req.params.id;
  const office = offices.find((office) => office.id === parseInt(officeId));

  if (!office && error) {
    return res.statusCode(400).send("Office does not exist")
  };

  office.type = req.body.type || office.type;
  office.name = req.body.name || office.type;

  res.send(`Office with the id ${id} has been updated.`)
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

  res.send(`Government office with the id ${id} deleted from the database.`);
};