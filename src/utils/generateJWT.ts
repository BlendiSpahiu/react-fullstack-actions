import jwt, { Algorithm } from 'jsonwebtoken';

// configs
import { JWT_ALGORITHM, JWT_EXPIRES_IN, JWT_SECRET } from '../config/jwt';
import { UserRoleEnums } from '../interfaces/enums/UserRoleEnums.enum';

// models
import { UserModel } from '../interfaces/models/index';

export const generateJWT = (user: UserModel) => {
  const payload = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': user.id.toString(),
      'x-hasura-role': user.role,
    },
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    algorithm: JWT_ALGORITHM as Algorithm,
  });
};
