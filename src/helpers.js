// Response helpers

function successResponse(res, message) {
  res.json({ success: true, msg: message });
}

function failResponse(res, message) {
  res.status(400).json({ success: false, msg: message });
}

// Database connection

require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};

module.exports = { successResponse, failResponse, dbConfig };
