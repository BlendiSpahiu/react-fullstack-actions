import express, { Application } from 'express';
import Knex from 'knex';
import { Model } from 'objection';

// Routes
import { routes } from './routes';

// Config
import { knexConfig } from './config/knex';

// Middleware
import { CorsMiddleware, AppErrorHandlerMiddleware } from './middleware/index';

// Application event handling
import './events/index';

// Creates knex instance
const knex = Knex(knexConfig);
Model.knex(knex);

// Boots express
export const app: Application = express();

// CORS
app.use(CorsMiddleware);

// Express configuration
app.use(express.json());

// Application routing
routes(app);

// Application (global) error handling
app.use(AppErrorHandlerMiddleware);
