const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* GET home page. */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cors());

require('./app/controllers/index')(app);
// require('./Controllers/authController')(app);
// require('./app/controllers/user')(app);
app.listen(4000, () =>{
    console.log("I'm working");
})
