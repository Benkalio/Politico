import express from 'express';
import bodyParser from 'body-parser';
import * as fs from 'node:fs/promises';
import * as http from 'http';
// import path from 'node:path';
import cors from "cors";
import morgan from 'morgan';

const hostName = 'localhost';
const PORT = process.env.PORT || 4000;

const app = express();

import officeRoutes from './src/routes/officeRoutes.js';
import partyRoutes from './src/routes/partyRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import data from './src/data.json' assert { type: "json" };

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false
}));

// Enabling CORS
app.use(cors());
app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
});

app.use('/users', userRouter);
app.use('/parties', partyRoutes);

officeRoutes(app);

app.route("/")
  .get(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.parse(data));
  });

app.listen(PORT, hostName, () => {
  console.log(`Server running on http://${hostName}:${PORT}`);
});