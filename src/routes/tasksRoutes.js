const express = require('express');
const { getTasks, postTask } = require('../controllers/tasksController');
const { validatePost, validateJWToken } = require('../helpers');

const tasksRouter = express.Router();

tasksRouter.get('/', validateJWToken, getTasks);
tasksRouter.post('/', validateJWToken, validatePost, postTask);

module.exports = tasksRouter;
