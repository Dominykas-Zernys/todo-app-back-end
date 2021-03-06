const mysql = require('mysql2/promise');
const { dbConfig } = require('../helpers');

async function checkIfAlreadyRegistered(email) {
  try {
    const sql = 'SELECT * FROM  Users WHERE email = ?';
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(sql, [email]);
    await con.close();
    return data.length > 0 && data;
  } catch (error) {
    return false;
  }
}

async function registerUserToDb({ email, password }) {
  try {
    const sql = 'INSERT INTO Users (email, password) VALUES (?, ?)';
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(sql, [email, password]);
    await con.close();
    return data;
  } catch (error) {
    return false;
  }
}

async function loginUserToDb(email) {
  try {
    const sql = 'SELECT * FROM Users WHERE email=?';
    const con = await mysql.createConnection(dbConfig);
    const [[data]] = await con.execute(sql, [email]);
    await con.close();
    return data;
  } catch (error) {
    return false;
  }
}

module.exports = { checkIfAlreadyRegistered, registerUserToDb, loginUserToDb };
