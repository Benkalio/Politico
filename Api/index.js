import express, {
  json
} from 'express';
import bodyParser from 'body-parser';
import * as fs from 'node:fs/promises';
import * as http from 'http';
// import path from 'node:path';
import cors from "cors";
import morgan from 'morgan';

const hostName = 'localhost';
const PORT = 4000;

const app = express();

import officeRoutes from './src/routes/officeRoutes.js';
import partyRoutes from './src/routes/partyRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import dataFile from './src/data.json';

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
app.use('/offices', officeRoutes);
app.use('/parties', partyRoutes);

app.get("/", async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send("This is the base!");
});

const server = http.createServer(app);

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}`);
});