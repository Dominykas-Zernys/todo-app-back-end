const express = require('express');
const { getTasks, postTask } = require('../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', postTask);

module.exports = tasksRouter;
