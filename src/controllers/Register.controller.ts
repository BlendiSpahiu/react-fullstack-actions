import { NextFunction, Request, Response, Router } from 'express';

// middleware
import { ValidationMiddleware } from '../middleware/index';

// services
import { RegisterService } from '../services/index';

// validators
import { RegisterValidator } from '../validators/index';

export const RegisterController: Router = Router();

RegisterController.post(
  '/',
  ValidationMiddleware(
    RegisterValidator,
    {},
    (req: Request) => req.body.input.data
  ),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = req.body.input;

      const result = await RegisterService.register(data);

      res.send(result.data).status(result.httpCode);
    } catch (err) {
      next(err);
    }
  }
);
