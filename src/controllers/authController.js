/* eslint-disable no-unused-expressions */
const { successResponse, failResponse } = require('../helpers');
const { registerUserToDb, loginUserToDb } = require('../models/authModel');

async function registerUser(req, res) {
  const registerResult = await registerUserToDb(req.body);
  registerResult
    ? successResponse(res, registerResult)
    : failResponse(res, registerResult);
}

async function loginUser(req, res) {
  const foundUser = await loginUserToDb(req.body.email);
  if (!foundUser) {
    failResponse(res, 'Email or password is incorrect');
    return;
  }
  if (foundUser.password === req.body.password) {
    successResponse(res, 'Login successful');
    return;
  }
  failResponse(res, 'Email or password is incorrect');
}

module.exports = { registerUser, loginUser };
