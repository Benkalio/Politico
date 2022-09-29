import {
  getParties,
  getParty,
  createParty,
  updateParty,
  deleteParty,
} from '../controllers/partyController';

const partyRouter = (app) => {
  app.get('/parties', getParties);
  app.post('/parties', createParty);

  app.get('/parties/:id', getParty);
  app.patch('/parties/:id', updateParty);
  app.delete('/parties/:id', deleteParty);
};

export default partyRouter;
