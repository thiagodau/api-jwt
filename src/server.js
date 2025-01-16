const express = require('express');
require('dotenv').config();

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001

app.use(router)

app.use(express.json());

app.listen(PORT, () => console.log('Listen on port ' + PORT))