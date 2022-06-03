import { Application, Router } from 'express';

// controllers
import {
  LoginController,
  PingController,
  RegisterController,
  ChangePasswordController,
} from './controllers/index';

const endpoints: [string, Router][] = [
  ['/ping', PingController],
  ['/login', LoginController],
  ['/register', RegisterController],
  ['/change-password', ChangePasswordController],
];

export const routes = (app: Application): void => {
  endpoints.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
