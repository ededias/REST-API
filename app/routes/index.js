const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express()

/* GET home page. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));



// app.listen(3000);

module.exports = require('./Controllers/App')(app);;
