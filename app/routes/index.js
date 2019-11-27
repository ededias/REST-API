const express = require('express');
const bodyParser = require('body-parser');

const app = express()

/* GET home page. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

require('./Controllers/App')(app);
require('./Controllers/user')(app);

app.listen(3000)

