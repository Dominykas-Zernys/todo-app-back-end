const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json('it works!'));

app.listen(5000, console.log(`Server is running on port ${PORT}`));
