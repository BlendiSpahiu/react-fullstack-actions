import Joi from 'joi';

export const RegisterValidator = Joi.object({
  fullName: Joi.string().trim().min(3).max(30).required().label('Full name'),
  companyName: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .required()
    .label('Company name'),
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
