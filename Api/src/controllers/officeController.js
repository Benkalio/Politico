import {
  v4 as uuidv4
} from 'uuid';

let offices = [{
  post: "governor",
  term: "4 years"
}];


export const getOffices = (req, res, next) => {
  res.send();
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