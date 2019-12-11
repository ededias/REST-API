const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

/* GET home page. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cors());

require('./Controllers/index')(app);

app.listen(4000, e =>{
    console.log("I'm working");
})
