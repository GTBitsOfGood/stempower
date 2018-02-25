//NPM imports
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//Local imports
const api = require('./backend/routes');

const app = express();
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
