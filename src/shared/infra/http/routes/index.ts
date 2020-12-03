import { Router } from 'express';
import UsersRouters from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.get('/test', (_, response) => response.json({ message: 'servidor funcionando' }));

routes.use('/users', UsersRouters);

export default routes;
