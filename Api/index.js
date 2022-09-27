import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import morgan from 'morgan';

import officeRouter from './src/routes/officeRoutes';
import partyRouter from './src/routes/partyRoutes';
import userRouter from './src/routes/userRoutes';

const hostName = 'localhost';
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false,
}));

// Enabling CORS
app.use(cors({ origin: true }));

userRouter(app);
partyRouter(app);
officeRouter(app);

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, hostName, () => {
  console.log(`Server running on http://${hostName}:${PORT}`);
});
