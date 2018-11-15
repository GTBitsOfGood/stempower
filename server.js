//NPM imports
const path = require('path');
const express = require('express');
const dbclient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");

let url = "mongodb://localhost:27017/stempower";
var mongoose = require('mongoose');
mongoose.connect(url);

//include db models to register Mongoose schemas
require('./backend/models/user');
require('./backend/models/mentor');
require('./backend/models/organization');
require('./backend/models/document');

const api = require('./backend/routes');
const app = express();

if(process.env.NODE_ENV === 'production'){
	url = process.env.MONGODB_URI
}

dbclient.connect(url, (err, db) => {
    if(err){
        console.log("Error: ", err);
    } else {
        console.log("Connected to MongoDB!");
    }
});

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());//may or may not be helpful

app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});


app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

