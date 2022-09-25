import express from 'express';
import bodyParser from 'body-parser';

import cors from "cors";
import morgan from 'morgan';

const hostName = 'localhost';
const PORT = process.env.PORT || 4000;

const app = express();

import officeRouter from './src/routes/officeRoutes.js';
import partyRouter from './src/routes/partyRoutes.js';
import userRouter from './src/routes/userRoutes.js';
// import data from './src/data.json' assert { type: "json" };

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false
}));

// Enabling CORS
app.use(cors({ origin: true }));

userRouter(app);
partyRouter(app);
officeRouter(app);

app.get("/", (req, res) => {
  return res.send("Hello")
})

app.listen(PORT, hostName, () => {
  console.log(`Server running on http://${hostName}:${PORT}`);
});