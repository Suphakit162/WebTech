const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/subject', require('./data/registerOccupation.js'));
app.use('/api/contact', require('./data/registerContact.js'));

app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});
