import Joi from 'joi';

export const RegisterValidator = Joi.object({
  name: Joi.string().trim().min(3).max(30).required().label('Full name'),
  email: Joi.string()
    .email({
      tlds: {
        allow: false,
      },
    })
    .trim()
    .required()
    .label('Email'),
  password: Joi.string().trim().min(8).required().label('Password'),
});
