//NPM imports
const path = require('path');
const express = require('express');
const dbclient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

let url = "mongodb://localhost:27017/stempower";
var mongoose = require('mongoose');
mongoose.connect(url);
require('./backend/models/mentor');
require('./backend/models/organization');

const api = require('./backend/routes');

const app = express();
dbclient.connect(url, (err, db) => {
    if(err){
        console.log("Error: ", err);
    } else {
        console.log("Connected to MongoDB!");
    }
});


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.use('/api', api);

app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});



app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

