import { Router } from 'express';
import { HelloController } from '../controllers/helloController';

const routes = Router();

const helloController = new HelloController();

routes.get('/', helloController.hello);

export { routes };