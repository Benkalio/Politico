const {
  v4: uuidv4
} = require('uuid');

let offices = [{
  post: "governor",
  term: "4 years"
}];


const getOffices = (req, res, next) => {
  res.send(offices);
  next();
};

const createOffice = (req, res, next) => {
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

const getOffice = (req, res, next) => {
  const {
    id
  } = req.params;

  const foundOffice = offices.find((office) => office.id === id);

  res.send(foundOffice);

  next();
};

const deleteOffice = (req, res, next) => {
  const {
    id
  } = req.params;

  offices = offices.filter((office) => office.id !== id);

  res.send(`Government office with the id ${id} deleted from the database.`);
  next();
};

const updateOffice = (req, res) => {
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

module.exports = {
  createOffice,
  getOffice,
  getOffices,
  updateOffice,
  deleteOffice
}






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