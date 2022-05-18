/* eslint-disable no-unused-expressions */
const { successResponse, failResponse } = require('../helpers');
const { getTasksFromDb, createNewTask } = require('../models/tasksModel');

async function getTasks(req, res) {
  const tasks = await getTasksFromDb();
  tasks ? successResponse(res, tasks) : failResponse(res, 'no tasks found');
}

async function postTask(req, res) {
  const postedTask = await createNewTask(req.body);
  postedTask
    ? successResponse(res, postedTask)
    : failResponse(res, "couldn't post new task");
}

module.exports = { getTasks, postTask };
