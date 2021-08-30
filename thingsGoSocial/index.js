const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const mongoose = require('./db');

const routes = require("./routes/routes");
// const router = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () =>{
    console.log("Server started at 3000")
});

app.use('/students', routes)




