import express from 'express';
import { routes } from './route/routes';

import './config/datadog';

const app = express();

app.use(routes);

app.listen(3333);