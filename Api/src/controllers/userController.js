// import {
//   v4 as uuidv4
// } from 'uuid';

import data from "../data.json" assert { type: "json" };

// let users = data.Users;
let users = [];

export const getUsers = (req, res) => {
  res.send({
    status: 200,
    users: data.Users
  });
};

export const createUser = (req, res) => {
  const {
    id,
    firstName,
    lastName,
    age,
    email,
    phoneNumber,
    passportURL,
  } = req.body;

  const user = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    phoneNumber: phoneNumber,
    passportURL: passportURL,
    isAdmin: false
  }

  users.push(user);

  res.send({
    status: 200,
    data: user,
  });
};

export const getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    res.statusCode = 404
    res.send("No user with this id")
  };

  res.send({
    status: 200,
    data: user
  });
}

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return res.statusCode(400).send("User does not exist")
  };

  const {
    id,
    firstName,
    lastName,
    age
  } = req.body;

  user.id = id || user.id;
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.age = age || user.age;

  res.send({
    status: 200,
    data: user
  })
};

export const deleteUser = (req, res) => {

  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return res.statusCode(400).send("User does not exist");
  };

  const indexOfUser = users.indexOf(user);
  user.splice(indexOfUser, 1);

  res.send({
    status: 200,
    message: `user with id ${req.params.id} has been deleted`
  });
};