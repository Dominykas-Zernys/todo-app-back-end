const mysql = require('mysql2/promise');
const { dbConfig } = require('../helpers');

async function getTasksFromDb() {
  try {
    const sql = 'SELECT * FROM Tasks';
    const con = await mysql.createConnection(dbConfig);
    const [tasks] = await con.query(sql);
    await con.close();
    return tasks;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function createNewTask({ userId, description }) {
  try {
    const sql = 'INSERT INTO Tasks (user_id, description) VALUES (?, ?)';
    const con = await mysql.createConnection(dbConfig);
    const [tasks] = await con.execute(sql, [userId, description]);
    await con.close();
    return tasks;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { getTasksFromDb, createNewTask };
