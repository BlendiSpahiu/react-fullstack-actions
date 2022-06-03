import Joi from 'joi';

export const ChangePasswordValidator = Joi.object({
  userId: Joi.number().required().label('User ID'),
  password: Joi.string().trim().min(8).required().label('Password'),
});
