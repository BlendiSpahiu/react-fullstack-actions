import express, { Application } from 'express';

// Routes
import { routes } from './routes';

// Middleware

// Application event handling
import './events/index';
import { AppErrorHandlerMiddleware } from './middleware/AppErrorHandler.middlware';
import { CorsMiddleware } from './middleware/Cors.middleware';

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
