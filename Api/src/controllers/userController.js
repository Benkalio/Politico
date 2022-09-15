import {
  v4 as uuidv4
} from 'uuid';

let users = [{
    id: uuidv4(),
    firstName: "Joseph",
    lastName: "Ikape",
    age: 30,
  },
  {
    id: uuidv4(),
    firstName: "Wesley",
    lastName: "Philip",
    age: 25,
  },
  {
    id: uuidv4(),
    firstName: "Christian",
    lastName: "Bale",
    age: 46,
  }
];

export const getUsers = (req, res, next) => {
  res.send(users);
  next();
};

export const createUser = (req, res, next) => {
  const user = {
    id: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  }

  users.push(user);

  res.send(`User ${user.firstName} added to the database.`);
  next();
};

export const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === parseInt(userId));
  if (!userId) return res.statusCode(404).send("No user with this id");

  res.send(user);
}

export const updateUser = (req, res) => {
  const userId = users.find((user) => user.id === req.params.id);

  if (!userId) return res.statusCode(400).send("User does not exist");

  userId.firstName = req.body.firstName;
  userId.lastName = req.user.lastName;
  userId.age = req.body.age;

  res.send(`username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`)
};

export const deleteUser = (req, res) => {

  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) return res.statusCode(400).send("User does not exist");

  const indexOfUser = users.indexOf(user);
  user.splice(indexOfUser, 1);

  res.send(`user with id ${req.params.id} has been deleted`);
};