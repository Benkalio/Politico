const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

const dummyJson = [{
  title: "Revisit here in a moment to see progress."
}];

// Support for Posting from urlencoded 
app.use(express.urlencoded({
  extended: true
}));


// Helmet enhances the API security 
app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send(dummyJson);
});

const dataJson = path.join(__dirname, 'data.json');

// listening server 
app.listen(2001, () => {
  console.log('listening on port 2001');
});