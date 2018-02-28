//NPM imports
const path = require('path');
const express = require('express');
const api = require('./backend/routes');
const dbclient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

let url = "mongodb://localhost:27017/stempower";
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

app.get('/', (request, response) => {
    response.sendFile('/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
