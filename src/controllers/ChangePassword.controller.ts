import { NextFunction, Request, Response, Router } from 'express';

// middleware
import { ValidationMiddleware } from '../middleware/index';

// services
import { ChangePasswordService } from '../services/index';

// validators
import { ChangePasswordValidator } from '../validators/index';

export const ChangePasswordController: Router = Router();

ChangePasswordController.post(
  '/',
  ValidationMiddleware(
    ChangePasswordValidator,
    {},
    (req: Request) => req.body.input.data
  ),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = req.body.input;

      const result = await ChangePasswordService.changePassword(data);

      res.send(result.data).status(result.httpCode);
    } catch (err) {
      next(err);
    }
  }
);
