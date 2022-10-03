/* eslint-disable consistent-return */

// Leaving this for auto generation of id
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

export const createUser = (req, res, err) => {
  const {
    id,
    firstName,
    lastName,
    otherName,
    email,
    phoneNumber,
    passportUrl,
    isAdmin,
  } = req.body;

  const user = {
    id,
    firstName,
    lastName,
    otherName,
    email,
    phoneNumber,
    passportUrl,
    isAdmin,
  };

  if (err) {
    res.statusCode = 400;
    res.send('Error creating user.');
  }
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
    otherName,
    email,
    phoneNumber,
    passportUrl,
  } = req.body;

  newUser.id = id || newUser.id;
  newUser.firstName = firstName || newUser.firstName;
  newUser.lastName = lastName || newUser.lastName;
  newUser.otherName = otherName || newUser.otherName;
  newUser.email = email || newUser.email;
  newUser.passportUrl = passportUrl || newUser.passportUrl;
  newUser.phoneNumber = phoneNumber || newUser.phoneNumber;

  res.send({
    status: 200,
    data: newUser,
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;
  const newUser = users.find((user) => user.id === parseInt(userId, 10));

  if (!newUser) {
    res.statusCode = 400;
    res.send('User does not exist');
  }

  const indexOfUser = users.indexOf(newUser);
  newUser.splice(indexOfUser, 1);

  res.send({
    status: 200,
    message: `user with id ${req.params.id} has been deleted`,
  });
};
