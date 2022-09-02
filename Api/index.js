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

const officeRoute = require('./src/routes/officeRoute.js');


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

let dataFile = path.join(__dirname, '/api/src/resources/data.json');

app.use('/offices', officeRoute);

app.get("/", (req, res, next) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.parse(dataFile));
  res.send('Texting from the other side')
  next();
});

const server = http.createServer(app);

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}`);
});