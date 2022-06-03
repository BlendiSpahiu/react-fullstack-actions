import { NextFunction, Request, Response, Router } from 'express';

// middleware
import { ValidationMiddleware } from '../middleware/index';

// services
import { LoginService } from '../services/index';

// validators
import { LoginValidator } from '../validators/index';

export const LoginController: Router = Router();

LoginController.post(
  '/',
  ValidationMiddleware(
    LoginValidator,
    {},
    (req: Request) => req.body.input.data
  ),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = req.body.input;

      const result = await LoginService.login(data);

      res.send(result.data).status(result.httpCode);
    } catch (err) {
      next(err);
    }
  }
);
