import {
  v4 as uuid
} from 'uuid';

let user = [];

export const getUsers = (req, res, next) => {
  res.send("There are no users");
  next();
};

export const createUser = (req, res, next) => {
  const user = req.body;

  users.push({
    ...user,
    id: uuid()
  });

  console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res, params) => {
  const {
    firstName,
    lastName,
    age
  } = req.body;
  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(req.params.id);
}

export const updateUser = (req, res, params) => {
  const user = users.find((user) => user.id === req.params.id);

  user.username = req.body.username;
  user.age = req.body.age;

  res.send(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};

export const deleteUser = (req, res) => {
  console.log(`user with id ${req.params.id} has been deleted`);

  users = users.filter((user) => user.id !== req.params.id);
};