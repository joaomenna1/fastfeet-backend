import { Router } from 'express';

const routes = Router();

routes.get('/test', (_, response) => response.json({ message: 'servidor funcionando' }));

export default routes;
