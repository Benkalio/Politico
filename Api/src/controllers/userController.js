// import {
//   v4 as uuidv4
// } from 'uuid';

import data from "../data.json" assert { type: "json" };;

let users = data.Users;

export const getUsers = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(data.Users);
};

export const createUser = (req, res) => {
  // id: uuidv4(),

  const user = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  }

  users.push(user);

  res.send({
    status: 200,
    data: user,
  });
};

export const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    res.statusCode = 404
    res.send("No user with this id")
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
    return res.statusCode(400).send("User does not exist");
  };

  const indexOfUser = users.indexOf(user);
  user.splice(indexOfUser, 1);

  res.send(`user with id ${req.params.id} has been deleted`);
};