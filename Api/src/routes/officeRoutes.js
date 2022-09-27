import {
  getOffices,
  createOffice,
  getOffice,
  deleteOffice,
  updateOffice,
} from '../controllers/officeController';

const officeRouter = (app) => {
  app.get('/offices', getOffices);
  app.post('/offices', createOffice);
  app.get('/offices/:id', getOffice);
  app.patch('/offices/:id', updateOffice);
  app.delete('/office/:id', deleteOffice);
};

export default officeRouter;
