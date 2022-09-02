const {
  v4: uuidv4
} = require('uuid');


module.exports
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