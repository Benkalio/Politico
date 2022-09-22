import {
  v4 as uuidv4
} from 'uuid';

import data from "../data.json" assert { type: "json" };;

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

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = {
    id: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  }

  users.push(user);

  res.send(`User ${user.firstName} added to the database.`);
};

export const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return res.statusCode(404).send("No user with this id")
  };

  res.send(user);
}

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.statusCode(400).send("User does not exist")
  };

  user.firstName = req.body.firstName || user.firstName;
  user.lastName = req.user.lastName || user.lastName;
  user.age = req.body.age || user.age;

  res.send(`username has been updated to ${req.body.firstName}.age has been updated to ${req.body.age}`)
};

export const deleteUser = (req, res) => {

  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.statusCode(400).send("User does not exist")
  };

  const indexOfUser = users.indexOf(user);
  user.splice(indexOfUser, 1);

  res.send(`user with id ${req.params.id} has been deleted`);
};