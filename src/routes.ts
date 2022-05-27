import { Application, Router } from 'express';

// controllers
import { PingController, RegisterController } from './controllers/index';

const endpoints: [string, Router][] = [
  ['/ping', PingController],
  // ['/login', LoginController],
  ['/register', RegisterController],
];

export const routes = (app: Application): void => {
  endpoints.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
