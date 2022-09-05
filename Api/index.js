const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const http = require('http');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const hostName = 'localhost';
const PORT = 4000;

const app = express();

const officeRoutes = require('./src/routes/officeRoutes.js');
const partyRoutes = require('./src/routes/partyRoutes.js');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false
}));

// Enabling CORS
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
});

const dataFile = require('../api/data.json');

app.use('/offices', officeRoutes);
app.use('/parties', partyRoutes);

app.get("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.parse(dataFile));
  // res.send('Testing the routes')
  next();
});

const server = http.createServer(app);

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}`);
});