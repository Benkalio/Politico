const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const http = require('http');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const partyRouter = require('./api/src/routes/officeRouter');
const officeRouter = require('./api/src/routes/officeRouter');

const hostname = 'localhost';
const port = 3000;

app.use(cors());

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));

// Enabling CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
});



app.use('/parties', partyRouter);
app.use('/offices', officeRouter);

const dataFile = path.join(__dirname + 'data.json');


app.use(("/"), (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(dataFile));
  next();
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});