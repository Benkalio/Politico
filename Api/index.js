const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const officeRouter = require('./src/routes/officeRouter');

const hostname = 'localhost';
const port = 2000;

const app = express();

// Support for Posting from urlencoded 
app.use(express.urlencoded({
  extended: true
}));

// Helmet enhances the API security 
app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('dev'));

app.use('/offices', officeRouter);

app.use(express.static(__dirname + '/src'))

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Testing app!</h1></body></html>');
});

const server = http.createServer(app);

// listening server 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});