import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';

const userRouter = (app) => {
  app.get('/users', getUsers);
  app.post('/users', createUser);

  app.get('/users/:id', getUser);
  app.patch('/users/:id', updateUser);
  app.delete('/users/:id', deleteUser);
};

export default userRouter;
