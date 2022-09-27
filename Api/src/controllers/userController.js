/* eslint-disable consistent-return */
// import {
//   v4 as uuidv4
// } from 'uuid';

import data from '../data.json';

// let users = data.Users;
const users = [];

export const getUsers = (req, res) => {
  res.send({
    status: 200,
    data: data.Users,
  });
};

export const createUser = (req, res) => {
  const user = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    passportURL: req.body.passportURL,
    isAdmin: false,
  };

  data.Users.push(user);

  res.send({
    status: 200,
    data: user,
  });
};

export const getUser = (req, res) => {
  const userId = req.params.id;
  const newUser = data.Users.find((user) => user.id === parseInt(userId, 10));

  if (!newUser) {
    res.statusCode = 404;
    res.send('No user with this id');
  }

  res.send({
    status: 200,
    data: newUser,
  });
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const newUser = data.Users.find((user) => user.id === parseInt(userId, 10));

  if (!newUser) {
    return res.statusCode(400).send('User does not exist');
  }

  const {
    id,
    firstName,
    lastName,
    age,
  } = req.body;

  newUser.id = id || newUser.id;
  newUser.firstName = firstName || newUser.firstName;
  newUser.lastName = lastName || newUser.lastName;
  newUser.age = age || newUser.age;

  res.send({
    status: 200,
    data: newUser,
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;
  const newUser = users.find((user) => user.id === parseInt(userId, 10));

  if (!newUser) {
    return res.statusCode(400).send('User does not exist');
  }

  const indexOfUser = users.indexOf(newUser);
  newUser.splice(indexOfUser, 1);

  res.send({
    status: 200,
    message: `user with id ${req.params.id} has been deleted`,
  });
};
